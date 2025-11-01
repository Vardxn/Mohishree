'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { FileText, Users, CheckCircle, Clock, XCircle, Calendar } from 'lucide-react';

interface QuoteRequest {
  id: number;
  name: string;
  phone: string;
  email: string;
  service_address: string;
  service_category: string;
  details: any;
  status: string;
  submitted_at: string;
  updated_at: string;
}

export default function AdminDashboardPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    if (statusFilter === 'all') {
      setFilteredQuotes(quotes);
    } else {
      setFilteredQuotes(quotes.filter(q => q.status === statusFilter));
    }
  }, [statusFilter, quotes]);

  const fetchQuotes = async () => {
    try {
      const response = await fetch('/api/quotes');
      const data = await response.json();
      
      if (data.success) {
        setQuotes(data.data);
        setFilteredQuotes(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuoteStatus = async (id: number, newStatus: string) => {
    try {
      const response = await fetch(`/api/quotes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchQuotes();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleLogout = async () => {
    document.cookie = 'admin_token=; Max-Age=0; path=/;';
    router.push('/admin/login');
  };

  const stats = [
    {
      title: 'Total Requests',
      value: quotes.length,
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Pending',
      value: quotes.filter(q => q.status === 'Pending').length,
      icon: <Clock className="w-6 h-6" />,
      color: 'bg-yellow-500',
    },
    {
      title: 'Completed',
      value: quotes.filter(q => q.status === 'Completed').length,
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Cancelled',
      value: quotes.filter(q => q.status === 'Cancelled').length,
      icon: <XCircle className="w-6 h-6" />,
      color: 'bg-red-500',
    },
  ];

  const statusOptions = ['Pending', 'Contacted', 'Scheduled', 'Completed', 'Cancelled'];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-text-primary font-heading">
              Admin Dashboard
            </h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-text-secondary mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} text-white p-3 rounded-lg`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quote Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                }`}
              >
                All ({quotes.length})
              </button>
              {statusOptions.map(status => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === status
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                  }`}
                >
                  {status} ({quotes.filter(q => q.status === status).length})
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quotes Table */}
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-text-secondary">Loading...</p>
              </div>
            ) : filteredQuotes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-text-secondary">No quote requests found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-border">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-border">
                    {filteredQuotes.map((quote) => (
                      <tr key={quote.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                          #{quote.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-text-primary">{quote.name}</div>
                          <div className="text-sm text-text-secondary">{quote.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                          {quote.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {quote.service_category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={quote.status}
                            onChange={(e) => updateQuoteStatus(quote.id, e.target.value)}
                            className="text-sm border border-border rounded-lg px-2 py-1"
                          >
                            {statusOptions.map(status => (
                              <option key={status} value={status}>{status}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                          {new Date(quote.submitted_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button
                            onClick={() => setSelectedQuote(quote)}
                            className="text-primary hover:text-primary-700 font-medium"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quote Detail Modal */}
      {selectedQuote && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text-primary font-heading">
                  Quote Request #{selectedQuote.id}
                </h2>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="text-text-secondary hover:text-text-primary"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-text-secondary">Customer Name</p>
                <p className="text-lg font-semibold text-text-primary">{selectedQuote.name}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Contact Information</p>
                <p className="text-text-primary">{selectedQuote.email}</p>
                <p className="text-text-primary">{selectedQuote.phone}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Service Category</p>
                <p className="text-text-primary font-semibold">{selectedQuote.service_category}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Service Address</p>
                <p className="text-text-primary">{selectedQuote.service_address}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Additional Details</p>
                <pre className="text-sm text-text-primary bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  {JSON.stringify(selectedQuote.details, null, 2)}
                </pre>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Submitted</p>
                <p className="text-text-primary">
                  {new Date(selectedQuote.submitted_at).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

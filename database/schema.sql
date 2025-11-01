-- Mohishree Facility Services Database Schema

-- Drop existing objects if they exist
DROP TABLE IF EXISTS quote_requests CASCADE;
DROP TABLE IF EXISTS contact_inquiries CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;
DROP TYPE IF EXISTS inquiry_status CASCADE;

-- Create enum type for status
CREATE TYPE inquiry_status AS ENUM ('Pending', 'Contacted', 'Scheduled', 'Completed', 'Cancelled');

-- Quote Requests Table
CREATE TABLE quote_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    service_address TEXT NOT NULL,
    service_category VARCHAR(50) NOT NULL CHECK (service_category IN ('Residential', 'Commercial', 'Industrial', 'Environmental')),
    details JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Contacted', 'Scheduled', 'Completed', 'Cancelled')),
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Contact Inquiries Table
CREATE TABLE contact_inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  status inquiry_status DEFAULT 'Pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table
CREATE TABLE admin_users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON quote_requests
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at
BEFORE UPDATE ON contact_inquiries
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
BEFORE UPDATE ON admin_users
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Create indexes
CREATE INDEX idx_quote_requests_status ON quote_requests(status);
CREATE INDEX idx_quote_requests_submitted_at ON quote_requests(submitted_at DESC);
CREATE INDEX idx_quote_requests_category ON quote_requests(service_category);
CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX idx_contact_inquiries_created_at ON contact_inquiries(created_at DESC);

-- Insert default admin user (password: admin123 - CHANGE THIS IN PRODUCTION!)
-- Password hash for 'admin123' using bcrypt
INSERT INTO admin_users (username, password_hash, email, full_name, role)
VALUES ('admin', '$2a$10$rWXvKhWXxzD0l4Y1bVHJduVRMxBPi5Yc5VnZ0OjKQZz8WZyQK.VC6', 'admin@mohishreejcmk.com', 'Administrator', 'admin')
ON CONFLICT (username) DO NOTHING;

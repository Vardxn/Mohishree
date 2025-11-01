import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

/**
 * PATCH /api/quotes/[id]
 * Update quote status
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    const id = params.id;

    // Validate status
    const validStatuses = ['Pending', 'Contacted', 'Scheduled', 'Completed', 'Cancelled'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }

    // Update in database
    await query(
      'UPDATE quote_requests SET status = $1, updated_at = NOW() WHERE id = $2',
      [status, id]
    );

    return NextResponse.json({
      success: true,
      message: 'Status updated successfully',
    });
  } catch (error) {
    console.error('Update status error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/quotes/[id]
 * Get single quote request
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const result = await query(
      'SELECT * FROM quote_requests WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Quote not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Get quote error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

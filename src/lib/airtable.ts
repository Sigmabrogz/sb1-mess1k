import Airtable from 'airtable';

const AIRTABLE_API_KEY = 'patZxgf4MxHgGrYps.17e4951e2e9f8c1f5f67b41e4a5e7268e0de9e3f79e12c9e7f52656df6aa6286';
const AIRTABLE_BASE_ID = 'appwPgQQKpkqxGnhR';

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

export const projectsTable = base('Projects');

export interface AirtableRecord {
  id: string;
  company_name: string;
  category: string;
  subcategory: string;
  website: string;
  twitter: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export async function createRecord(fields: Omit<AirtableRecord, 'id' | 'created_at' | 'status'>) {
  return projectsTable.create([
    {
      fields: {
        ...fields,
        status: 'pending',
        created_at: new Date().toISOString()
      }
    }
  ]);
}

export async function updateRecord(id: string, fields: Partial<AirtableRecord>) {
  return projectsTable.update([
    {
      id,
      fields
    }
  ]);
}

export async function fetchRecords(filterByFormula?: string) {
  return projectsTable.select({
    filterByFormula: filterByFormula || "status = 'pending'",
    sort: [{ field: 'created_at', direction: 'desc' }]
  }).all();
}
const tables = [
  {
    key: "ventures",
    title: "Ventures",
    singular: "Venture",
    summary: "Companies, SPVs, clients, partners",
    listColumns: ["name", "type", "status", "verticals", "date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "type", label: "Type", type: "select", options: ["Self", "SPV", "Subsidiary", "Client", "Partner", "Vendor", "JV", "Prospect"], required: true },
      { name: "status", label: "Status", type: "select", options: ["Prospect", "Active", "Dormant", "Closed"] },
      { name: "verticals", label: "Verticals", type: "text", placeholder: "Comma separated" },
      { name: "entity_form", label: "Entity form", type: "select", options: ["PvtLtd", "LLP", "Proprietorship", "Trust", "Other"] },
      { name: "reg_no", label: "Reg no.", type: "text", placeholder: "CIN / LLPIN / GST" },
      { name: "primary_contact", label: "Primary contact", type: "text" },
      { name: "tags", label: "Tags", type: "text", placeholder: "Comma separated" },
    ],
  },
  {
    key: "people",
    title: "People",
    singular: "Person",
    summary: "Contacts, roles, and access",
    listColumns: ["name", "type", "venture", "access_level", "status"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "venture", label: "Venture", type: "text" },
      { name: "type", label: "Type", type: "select", options: ["Founder", "Investor", "Partner", "Client", "Vendor", "Consultant", "Contractor", "Employee"], required: true },
      { name: "role_title", label: "Role title", type: "select", options: ["Managing Director", "Project Manager", "Site Engineer", "Architect", "Client SPOC", "Finance Head", "Vendor Coordinator", "Legal Consultant"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Inactive"], value: "Active" },
      { name: "access_level", label: "Access level", type: "select", options: ["Founder", "Partner", "Employee", "Client", "Contractor"] },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    singular: "Project",
    summary: "Execution layers across ventures",
    listColumns: ["name", "venture", "status", "lead", "target_date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text" },
      { name: "vertical", label: "Vertical", type: "text" },
      { name: "type", label: "Type", type: "select", options: ["Development", "Marketing", "Acquisition", "Leasing", "Infra", "CapitalRaise", "Logistics", "Internal"] },
      { name: "asset", label: "Asset", type: "text" },
      { name: "stage", label: "Stage", type: "select", options: ["Origination", "Scoping", "Mandate", "Execution", "Delivery", "Closure"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "On-Hold", "Blocked", "Completed", "Cancelled"] },
      { name: "start_date", label: "Start date", type: "date" },
      { name: "target_date", label: "Target date", type: "date" },
      { name: "lead", label: "Lead", type: "text" },
      { name: "client_shareable", label: "Client shareable", type: "checkbox" },
    ],
  },
  {
    key: "tasks",
    title: "Tasks",
    singular: "Task",
    summary: "Daily work, owners, deadlines",
    listColumns: ["title", "status", "owner", "priority", "due_date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "venture", label: "Venture", type: "text", required: true },
      { name: "project", label: "Project", type: "text", required: true },
      { name: "parent_task", label: "Parent task", type: "text" },
      { name: "status", label: "Status", type: "select", options: ["Backlog", "To-Do", "In-Progress", "In-Review", "Blocked", "Done"] },
      { name: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High", "Critical"] },
      { name: "owner", label: "Owner", type: "text", required: true },
      { name: "assignees", label: "Assignees", type: "text" },
      { name: "depends_on", label: "Depends on", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "estimate", label: "Estimated time", type: "text" },
      { name: "time_logged", label: "Time logged (time spent)", type: "text" },
      { name: "external_shared_with", label: "External shared with", type: "text" },
    ],
  },
  {
    key: "documents",
    title: "Documents",
    singular: "Document",
    summary: "Notes, files, and agreements",
    listColumns: ["title", "venture", "project", "type", "status", "date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "related_assets", label: "Assets", type: "select" },
      { name: "related_events", label: "Events", type: "select" },
      { name: "related_transactions", label: "Transactions", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Note", "Report", "Agreement", "Drawing", "Photo", "Model", "Proposal", "Research", "Comms"] },
      { name: "body", label: "Body", type: "textarea" },
      { name: "file_ref", label: "File ref", type: "text" },
      { name: "version", label: "Version", type: "number" },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Final", "Signed", "Superseded"] },
      { name: "links", label: "Links", type: "text", placeholder: "ventures, projects, tasks..." },
      { name: "permission", label: "Permission", type: "select", options: ["Internal", "Restricted", "Client-visible", "Contractor-visible"] },
      { name: "tags", label: "Tags", type: "text", placeholder: "Comma separated" },
    ],
  },
  {
    key: "assets",
    title: "Assets",
    singular: "Asset",
    summary: "Buildings, land, and units",
    listColumns: ["name", "type", "status", "owner_ventures", "date"],
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Building", "Land", "Unit", "Theatre", "Warehouse", "Mixed"] },
      { name: "address", label: "Address", type: "textarea" },
      { name: "lat", label: "lat", type: "number", step: "any" },
      { name: "lng", label: "lng", type: "number", step: "any" },
      { name: "area", label: "Area", type: "text" },
      { name: "unit", label: "Unit", type: "text" },
      { name: "owner_ventures", label: "Owner ventures", type: "text" },
      { name: "status", label: "Status", type: "select", options: ["Under-Acquisition", "Owned", "Under-Development", "Operational", "Disposed"] },
    ],
  },
  {
    key: "events",
    title: "Events",
    singular: "Event",
    summary: "Meetings, visits, and calls",
    listColumns: ["title", "type", "start", "duration", "date"],
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "date", label: "Date", type: "date" },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "type", label: "Type", type: "select", options: ["Meeting", "FieldVisit", "Call", "Inspection", "Other"] },
      { name: "start", label: "Start", type: "datetime-local" },
      { name: "end", label: "End", type: "datetime-local" },
      { name: "participants", label: "Participants", type: "text", placeholder: "Comma separated people" },
      { name: "location", label: "Location", type: "text" },
      { name: "summary", label: "Summary", type: "textarea" },
      { name: "calendar_ref", label: "Calendar ref", type: "text" },
    ],
  },
  {
    key: "transactions",
    title: "Transactions",
    singular: "Transaction",
    summary: "Receivables, payables, invoices",
    listColumns: ["reference", "direction", "status", "amount", "due_date"],
    fields: [
      { name: "reference", label: "Reference", type: "text", required: true },
      { name: "venture", label: "Venture", type: "select", required: true },
      { name: "project", label: "Project", type: "select" },
      { name: "task", label: "Task", type: "select" },
      { name: "direction", label: "Direction", type: "select", options: ["Receivable", "Payable"] },
      { name: "amount", label: "Amount", type: "text", inputmode: "numeric", data_format: "transaction-amount" },
      { name: "currency", label: "Currency", type: "select", value: "INR", options: ["INR", "USD", "EUR", "GBP", "AED", "SAR", "SGD"] },
      { name: "status", label: "Status", type: "select", options: ["Draft", "Raised", "Partly-Paid", "Paid", "Overdue", "Written-Off"] },
      { name: "counterparty", label: "Counterparty", type: "text" },
      { name: "project_asset", label: "Project / asset", type: "text" },
      { name: "due_date", label: "Due date", type: "date" },
      { name: "documents", label: "Documents", type: "text", placeholder: "Linked docs" },
    ],
  },
];

const SUPABASE_URL = "https://bnzkqkwxjseksvgccwid.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_PSWbQARLq3i8ryb_eUv1ow_PwLHYxyH";
const LOGO_URL = "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/logo.png";
const APP_TIMEZONE = "Asia/Kolkata";
const REMOTE_TABLE_KEYS = new Set(tables.map((table) => table.key));
const supabaseClientFactory = globalThis.supabase?.createClient ?? null;
const supabaseClient = supabaseClientFactory
  ? supabaseClientFactory(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const data = {
  ventures: [
    {
      id: "ven_1",
      name: "v1",
      type: "Self",
      status: "Active",
      verticals: ["core"],
      date: "2026-06-28",
      entity_form: "PvtLtd",
    },
    {
      id: "ven_2",
      name: "v2",
      type: "SPV",
      status: "Active",
      verticals: ["asset"],
      date: "2026-06-28",
      entity_form: "LLP",
    },
    {
      id: "ven_3",
      name: "ATit",
      type: "Self",
      status: "Active",
      verticals: ["core"],
      date: "2026-06-28",
      entity_form: "PvtLtd",
    },
  ],
  people: [
    {
      id: "ppl_1",
      name: "v1_p1",
      type: "Founder",
      email: "v1_p1@atit.com",
      phone: "9000000001",
      venture: "v1",
      role_title: "Managing Director",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_2",
      name: "v1_p2",
      type: "Partner",
      email: "v1_p2@atit.com",
      phone: "9000000002",
      venture: "v1",
      role_title: "Project Manager",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_3",
      name: "v2_p1",
      type: "Partner",
      email: "v2_p1@atit.com",
      phone: "9000000003",
      venture: "v2",
      role_title: "Finance Head",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_4",
      name: "v1_p3",
      type: "Employee",
      email: "v1_p3@atit.com",
      phone: "9000000004",
      venture: "v1",
      role_title: "Site Engineer",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_5",
      name: "v1_p4",
      type: "Employee",
      email: "v1_p4@atit.com",
      phone: "9000000005",
      venture: "v1",
      role_title: "Architect",
      access_level: "Employee",
      status: "Active",
    },
    {
      id: "ppl_6",
      name: "v2_p2",
      type: "Contractor",
      email: "v2_p2@atit.com",
      phone: "9000000006",
      venture: "v2",
      role_title: "Vendor Coordinator",
      access_level: "Contractor",
      status: "Active",
    },
    {
      id: "ppl_7",
      name: "at_p1",
      type: "Founder",
      email: "at_p1@atit.com",
      phone: "9000000007",
      venture: "ATit",
      role_title: "Managing Director",
      access_level: "Founder",
      status: "Active",
    },
    {
      id: "ppl_8",
      name: "at_p2",
      type: "Partner",
      email: "at_p2@atit.com",
      phone: "9000000008",
      venture: "ATit",
      role_title: "Project Manager",
      access_level: "Partner",
      status: "Active",
    },
    {
      id: "ppl_9",
      name: "at_p3",
      type: "Employee",
      email: "at_p3@atit.com",
      phone: "9000000009",
      venture: "ATit",
      role_title: "Architect",
      access_level: "Employee",
      status: "Active",
    },
  ],
  projects: [
    {
      id: "prj_1",
      name: "p1",
      venture: "v1",
      vertical: "core",
      type: "Development",
      stage: "Execution",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-12",
      lead: "v1_p1",
      client_shareable: true,
    },
    {
      id: "prj_2",
      name: "p2",
      venture: "v1",
      vertical: "ops",
      type: "Marketing",
      stage: "Scoping",
      status: "Active",
      start_date: "2026-06-28",
      target_date: "2026-07-20",
      lead: "v1_p2",
      client_shareable: false,
    },
    {
      id: "prj_3",
      name: "p3",
      venture: "v2",
      vertical: "asset",
      type: "Internal",
      stage: "Origination",
      status: "Blocked",
      start_date: "2026-06-28",
      target_date: "2026-07-31",
      lead: "v2_p1",
      client_shareable: false,
    },
  ],
  tasks: [
    {
      id: "tsk_1",
      title: "t1",
      venture: "v1",
      project: "p1",
      status: "To-Do",
      priority: "High",
      owner: "v1_p3",
      assignees: ["at_p1", "at_p2"],
      due_date: "2026-07-02",
      estimate: "2h",
      time_logged: "0h",
    },
    {
      id: "tsk_2",
      title: "t2",
      venture: "v1",
      project: "p1",
      status: "In-Progress",
      priority: "Medium",
      owner: "v1_p4",
      due_date: "2026-07-04",
      estimate: "4h",
      time_logged: "1h",
    },
    {
      id: "tsk_3",
      title: "t3",
      venture: "v1",
      project: "p2",
      status: "Blocked",
      priority: "High",
      owner: "v1_p3",
      due_date: "2026-07-08",
      estimate: "3h",
      time_logged: "0h",
    },
    {
      id: "tsk_4",
      title: "t4",
      venture: "v2",
      project: "p3",
      status: "Backlog",
      priority: "Low",
      owner: "v2_p2",
      due_date: "2026-07-15",
      estimate: "1h",
      time_logged: "0h",
    },
  ],
  documents: [
    {
      id: "doc_1",
      title: "d1",
      date: "2026-06-28",
      venture: "v1",
      type: "Note",
      body: "venture level",
      version: 1,
      status: "Draft",
      links: ["v1"],
      permission: "Internal",
      tags: ["seed"],
    },
    {
      id: "doc_2",
      title: "d2",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Agreement",
      body: "project level",
      version: 1,
      status: "Final",
      links: ["p1"],
      permission: "Restricted",
      tags: ["seed"],
    },
    {
      id: "doc_3",
      title: "d3",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Report",
      body: "task level",
      version: 1,
      status: "Signed",
      links: ["t1"],
      permission: "Client-visible",
      tags: ["seed"],
    },
  ],
  events: [
    {
      id: "evt_1",
      title: "e1",
      date: "2026-06-28",
      venture: "v1",
      type: "Meeting",
      start: "2026-06-28T09:00",
      end: "2026-06-28T09:30",
      participants: [],
      location: "HQ",
      summary: "venture level",
      calendar_ref: "cal-v1",
    },
    {
      id: "evt_2",
      title: "e2",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Call",
      start: "2026-06-28T10:00",
      end: "2026-06-28T10:30",
      participants: [],
      location: "site",
      summary: "project level",
      calendar_ref: "cal-p1",
    },
    {
      id: "evt_3",
      title: "e3",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Inspection",
      start: "2026-06-28T11:00",
      end: "2026-06-28T11:30",
      participants: [],
      location: "field",
      summary: "task level",
      calendar_ref: "cal-t1",
    },
  ],
  assets: [
    {
      id: "ast_1",
      name: "a1",
      date: "2026-06-28",
      venture: "v1",
      type: "Land",
      address: "venture level",
      lat: 0,
      lng: 0,
      area: "1 ac",
      unit: "lot",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Owned",
    },
    {
      id: "ast_2",
      name: "a2",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      type: "Building",
      address: "project level",
      lat: 0,
      lng: 0,
      area: "5000 sqft",
      unit: "b1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Under-Development",
    },
    {
      id: "ast_3",
      name: "a3",
      date: "2026-06-28",
      venture: "v1",
      project: "p1",
      task: "t1",
      type: "Unit",
      address: "task level",
      lat: 0,
      lng: 0,
      area: "1200 sqft",
      unit: "u1",
      owner_ventures: [{ venture: "v1", stake: "100" }],
      status: "Operational",
    },
  ],
  transactions: [
    {
      id: "txn_1",
      reference: "x1",
      venture: "v1",
      direction: "Receivable",
      amount: "100000",
      currency: "INR",
      status: "Raised",
      counterparty: "c1",
      project_asset: "a1",
      due_date: "2026-07-05",
      documents: ["d1"],
    },
    {
      id: "txn_2",
      reference: "x2",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "50000",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "c2",
      project_asset: "a2",
      due_date: "2026-07-10",
      documents: ["d2"],
    },
    {
      id: "txn_3",
      reference: "x3",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Receivable",
      amount: "25000",
      currency: "INR",
      status: "Draft",
      counterparty: "c3",
      project_asset: "a3",
      due_date: "2026-07-14",
      documents: ["d3"],
    },
    {
      id: "txn_4",
      reference: "food-01",
      venture: "v1",
      direction: "Payable",
      amount: "1800",
      currency: "INR",
      status: "Paid",
      counterparty: "cafe",
      project_asset: "a1",
      due_date: "2026-06-28",
      documents: [],
    },
    {
      id: "txn_5",
      reference: "food-02",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "1200",
      currency: "INR",
      status: "Raised",
      counterparty: "canteen",
      project_asset: "a2",
      due_date: "2026-06-29",
      documents: [],
    },
    {
      id: "txn_6",
      reference: "food-03",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Receivable",
      amount: "950",
      currency: "INR",
      status: "Draft",
      counterparty: "tea stall",
      project_asset: "a3",
      due_date: "2026-06-30",
      documents: [],
    },
    {
      id: "txn_7",
      reference: "food-04",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "2400",
      currency: "INR",
      status: "Overdue",
      counterparty: "mess",
      project_asset: "a1",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_8",
      reference: "food-05",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "600",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-03",
      documents: [],
    },
    {
      id: "txn_9",
      reference: "office-01",
      venture: "v1",
      direction: "Payable",
      amount: "3200",
      currency: "INR",
      status: "Raised",
      counterparty: "stationery",
      project_asset: "a1",
      due_date: "2026-07-04",
      documents: [],
    },
    {
      id: "txn_10",
      reference: "office-02",
      venture: "v2",
      direction: "Payable",
      amount: "8700",
      currency: "INR",
      status: "Draft",
      counterparty: "printer",
      project_asset: "a1",
      due_date: "2026-07-06",
      documents: [],
    },
    {
      id: "txn_11",
      reference: "food-06",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "780",
      currency: "INR",
      status: "Paid",
      counterparty: "cafe",
      project_asset: "a2",
      due_date: "2026-07-02",
      documents: [],
    },
    {
      id: "txn_12",
      reference: "food-07",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "1640",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "mess",
      project_asset: "a1",
      due_date: "2026-07-07",
      documents: [],
    },
    {
      id: "txn_13",
      reference: "water-01",
      venture: "v1",
      project: "p2",
      direction: "Payable",
      amount: "560",
      currency: "INR",
      status: "Paid",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-05",
      documents: [],
    },
    {
      id: "txn_14",
      reference: "water-02",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "420",
      currency: "INR",
      status: "Raised",
      counterparty: "water supplier",
      project_asset: "a2",
      due_date: "2026-07-08",
      documents: [],
    },
    {
      id: "txn_15",
      reference: "rent-01",
      venture: "v2",
      direction: "Payable",
      amount: "45000",
      currency: "INR",
      status: "Overdue",
      counterparty: "landlord",
      project_asset: "a1",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_16",
      reference: "rent-02",
      venture: "v1",
      project: "p1",
      direction: "Payable",
      amount: "28000",
      currency: "INR",
      status: "Raised",
      counterparty: "landlord",
      project_asset: "a2",
      due_date: "2026-07-10",
      documents: [],
    },
    {
      id: "txn_17",
      reference: "travel-01",
      venture: "v1",
      project: "p1",
      task: "t1",
      direction: "Payable",
      amount: "2100",
      currency: "INR",
      status: "Draft",
      counterparty: "cab",
      project_asset: "a3",
      due_date: "2026-07-09",
      documents: [],
    },
    {
      id: "txn_18",
      reference: "travel-02",
      venture: "v2",
      project: "p3",
      task: "t4",
      direction: "Receivable",
      amount: "6100",
      currency: "INR",
      status: "Raised",
      counterparty: "client travel",
      project_asset: "a3",
      due_date: "2026-07-12",
      documents: [],
    },
    {
      id: "txn_19",
      reference: "fuel-01",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "5400",
      currency: "INR",
      status: "Paid",
      counterparty: "fuel station",
      project_asset: "a1",
      due_date: "2026-07-03",
      documents: [],
    },
    {
      id: "txn_20",
      reference: "fuel-02",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Payable",
      amount: "3900",
      currency: "INR",
      status: "Partly-Paid",
      counterparty: "fuel station",
      project_asset: "a2",
      due_date: "2026-07-11",
      documents: [],
    },
    {
      id: "txn_21",
      reference: "food-08",
      venture: "v1",
      direction: "Payable",
      amount: "940",
      currency: "INR",
      status: "Paid",
      counterparty: "canteen",
      project_asset: "a1",
      due_date: "2026-07-04",
      documents: [],
    },
    {
      id: "txn_22",
      reference: "food-09",
      venture: "v2",
      project: "p3",
      task: "t4",
      direction: "Payable",
      amount: "1320",
      currency: "INR",
      status: "Raised",
      counterparty: "tea stall",
      project_asset: "a3",
      due_date: "2026-07-06",
      documents: [],
    },
    {
      id: "txn_23",
      reference: "misc-01",
      venture: "v1",
      project: "p1",
      direction: "Receivable",
      amount: "12500",
      currency: "INR",
      status: "Draft",
      counterparty: "client a",
      project_asset: "a2",
      due_date: "2026-07-14",
      documents: [],
    },
    {
      id: "txn_24",
      reference: "misc-02",
      venture: "v1",
      project: "p1",
      task: "t2",
      direction: "Payable",
      amount: "2750",
      currency: "INR",
      status: "Raised",
      counterparty: "vendor b",
      project_asset: "a2",
      due_date: "2026-07-13",
      documents: [],
    },
    {
      id: "txn_25",
      reference: "misc-03",
      venture: "v2",
      direction: "Receivable",
      amount: "22000",
      currency: "INR",
      status: "Draft",
      counterparty: "client b",
      project_asset: "a1",
      due_date: "2026-07-15",
      documents: [],
    },
    {
      id: "txn_26",
      reference: "misc-04",
      venture: "v2",
      project: "p3",
      direction: "Payable",
      amount: "6400",
      currency: "INR",
      status: "Paid",
      counterparty: "consultant",
      project_asset: "a3",
      due_date: "2026-07-08",
      documents: [],
    },
    {
      id: "txn_27",
      reference: "misc-05",
      venture: "v1",
      project: "p2",
      direction: "Payable",
      amount: "5100",
      currency: "INR",
      status: "Overdue",
      counterparty: "vendor c",
      project_asset: "a2",
      due_date: "2026-07-01",
      documents: [],
    },
    {
      id: "txn_28",
      reference: "misc-06",
      venture: "v1",
      project: "p2",
      task: "t3",
      direction: "Receivable",
      amount: "7300",
      currency: "INR",
      status: "Raised",
      counterparty: "client c",
      project_asset: "a3",
      due_date: "2026-07-16",
      documents: [],
    },
  ],
  roles: {
    Founder: {
      title: "Founder view",
      items: [
        ["Portfolio pulse", "3 live initiatives, 1 stalled internal stream"],
        ["Near-term pressure", "2 items need action inside 72 hours"],
        ["Cash movement", "1 receivable open, 2 outgoing items pending"],
        ["Team spread", "6 people working across 4 ventures"],
      ],
    },
    Partner: {
      title: "Partner view",
      items: [
        ["Coverage", "Scoped to linked ventures and active mandates"],
        ["Current lanes", "2 external workstreams need monitoring"],
        ["Watchlist", "1 delayed item needs escalation"],
        ["Shared files", "3 current records available in scope"],
      ],
    },
    Employee: {
      title: "Employee view",
      items: [
        ["My queue", "3 open items, 1 already moving"],
        ["Logged time", "1 hour 10 minutes this week"],
        ["Upcoming touchpoints", "2 meetings and 1 field visit ahead"],
        ["Next move", "Clear the blocked rollout brief branch"],
      ],
    },
  },
};

const userAccounts = [
  {
    id: "usr_1",
    name: "ATIT Admin",
    email: "admin@atit.com",
    password: "atit-admin-01",
    role: "Admin",
    status: "Active",
    venture_scope: "All ventures",
    table_access: tables.map((table) => table.key),
  },
  {
    id: "usr_2",
    name: "Dev Malik",
    email: "dev@atit.com",
    password: "atit-founder-01",
    role: "Founder",
    status: "Active",
    venture_scope: "ATIT",
    table_access: ["ventures", "people", "projects", "tasks", "documents", "events", "transactions"],
  },
  {
    id: "usr_3",
    name: "Meera Sethi",
    email: "meera@atit.com",
    password: "atit-ops-01",
    role: "Employee",
    status: "Active",
    venture_scope: "ATIT",
    table_access: ["projects", "tasks", "documents", "events", "assets"],
  },
];

const accessRoles = ["Admin", "Founder", "Partner", "Employee", "Client", "Contractor"];

function seedRecordMetadata() {
  const baseTime = Date.parse("2026-06-01T09:00:00.000Z");
  let offset = 0;

  Object.values(data).forEach((value) => {
    if (!Array.isArray(value)) return;
    value.forEach((row) => {
      if (!row.createdAt) {
        row.createdAt = new Date(baseTime + offset * 60000).toISOString();
      }
      offset += 1;
    });
  });
}

seedRecordMetadata();

const state = {
  role: "Founder",
  projectId: "prj_1",
  taskId: "tsk_1",
  search: "",
  activeTable: "projects",
  activeNav: "dashboard",
  modalMode: "create",
  modalEntity: "table",
  editingRecordId: null,
  editingUserId: null,
  sidebarCollapsed: true,
  detailTableKey: null,
  detailRecordId: null,
  detailTreeOpen: false,
  detailHistory: [],
  sangeethaPropertyId: null,
  sangeethaPropertyTab: "overview",
  recordFilters: {},
  taskExpanded: {},
  ganttWeekStart: null,
  ganttScale: "week",
};

const el = {};
let confirmResolve = null;

const arrayFields = new Set(["verticals", "tags"]);
const hierarchyAttachmentTables = new Set(["tasks", "documents", "assets", "events", "transactions"]);

const relationFields = {
  venture: { table: "ventures", labelField: "name" },
  asset: { table: "assets", labelField: "name" },
  lead: { table: "people", labelField: "name" },
  primary_contact: { table: "people", labelField: "name" },
  project: { table: "projects", labelField: "name" },
  parent_task: { table: "tasks", labelField: "title" },
  owner: { table: "people", labelField: "name" },
  assignees: { table: "people", labelField: "name", multiple: true },
  depends_on: { table: "tasks", labelField: "title", multiple: true },
  external_shared_with: { table: "people", labelField: "name" },
  owner_ventures: { table: "ventures", labelField: "name", multiple: true },
  task: { table: "tasks", labelField: "title" },
  participants: { table: "people", labelField: "name", multiple: true },
  links: { tables: ["ventures", "people", "projects", "tasks", "documents", "assets", "events", "transactions"], multiple: true },
  related_assets: { table: "assets", labelField: "name", multiple: true },
  related_events: { table: "events", labelField: "title", multiple: true },
  related_transactions: { table: "transactions", labelField: "reference", multiple: true },
  counterparty: { table: "ventures", labelField: "name" },
  project_asset: { tables: ["projects", "assets"] },
  documents: { table: "documents", labelField: "title", multiple: true },
};

const jsonColumnDefaults = {
  ventures: { verticals: [], tags: [] },
  tasks: { assignees: [], depends_on: [] },
  documents: { links: [], related_assets: [], related_events: [], related_transactions: [], tags: [] },
  assets: { owner_ventures: [] },
  events: { participants: [] },
  transactions: { documents: [] },
};

const hiddenSidebarTableKeys = new Set(["assets", "events"]);
const visibleSidebarTables = tables.filter((table) => !hiddenSidebarTableKeys.has(table.key));

const sidebarItems = [
  { key: "dashboard", label: "Dashboard", kind: "dashboard", count: null },
  ...visibleSidebarTables.map((table) => ({ key: table.key, label: table.title, kind: "table" })),
  { key: "gantt", label: "Gantt Chart", kind: "gantt", count: null },
  { key: "admin", label: "Admin", kind: "admin", count: null },
];

const peopleTypeHierarchy = ["Founder", "Investor", "Partner", "Client", "Vendor", "Consultant", "Contractor", "Employee"];
const peopleTypeRank = new Map(peopleTypeHierarchy.map((type, index) => [type, index]));
const durationUnits = [
  { value: "h", label: "Hours" },
  { value: "d", label: "Days" },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatList(value) {
  if (Array.isArray(value) && value.length && typeof value[0] === "object" && value[0] !== null) {
    return value
      .map((item) => {
        const venture = item.venture || item.name || item.title || "—";
        const stake = item.stake ? ` (${item.stake}%)` : "";
        return `${venture}${stake}`;
      })
      .join(", ");
  }
  if (Array.isArray(value)) return value.join(", ");
  return value ?? "—";
}

function parseDurationValue(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  if (!normalized) return null;

  const match = normalized.match(/^(\d+(?:\.\d+)?)\s*([a-z]+)$/);
  if (!match) return null;

  const amount = Number(match[1]);
  if (!Number.isFinite(amount) || amount <= 0) return null;

  const unitToken = match[2];
  const unit = ["d", "day", "days"].includes(unitToken)
    ? "d"
    : ["h", "hr", "hrs", "hour", "hours"].includes(unitToken)
      ? "h"
      : null;

  if (!unit) return null;
  return { amount, unit };
}

function formatDurationValue(amount, unit) {
  if (!Number.isFinite(amount) || amount <= 0) return "";
  const normalizedAmount = String(amount).replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
  return `${normalizedAmount}${unit}`;
}

function convertDurationToHours(value) {
  const parsed = parseDurationValue(value);
  if (!parsed) return 0;
  return parsed.unit === "d" ? parsed.amount * 8 : parsed.amount;
}

function getRecordLabel(tableKey, row) {
  if (!row) return "";
  return row.name || row.title || row.reference || row.id || "";
}

function getPersonByName(name) {
  const normalizedName = String(name ?? "").trim();
  if (!normalizedName) return null;
  return data.people.find((item) => String(item.name ?? "").trim() === normalizedName) ?? null;
}

function formatPersonDisplayLabel(value) {
  if (value == null || value === "") return "";

  const row = typeof value === "object" && value !== null
    ? value
    : getPersonByName(value);
  const name = String((row?.name ?? value) || "").trim();
  if (!name) return "";

  const venture = String(row?.venture ?? "").trim();
  return venture ? `${name} (${venture})` : name;
}

function getEntryLabel(entry) {
  if (entry == null) return "";
  if (typeof entry === "object") {
    return entry.venture || entry.name || entry.title || entry.reference || entry.label || "";
  }
  return String(entry);
}

function getEntryStake(entry) {
  if (!entry || typeof entry !== "object") return "";
  return entry.stake ?? "";
}

function getFormFieldValue(fieldName) {
  const field = el.formElement?.elements?.[fieldName];
  if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) {
    return String(field.value ?? "").trim();
  }
  return "";
}

function getProjectByName(projectName) {
  return data.projects.find((item) => item.name === projectName) ?? null;
}

function getTaskByTitle(taskTitle) {
  return data.tasks.find((item) => item.title === taskTitle) ?? null;
}

function getVentureByName(ventureName) {
  return data.ventures.find((item) => item.name === ventureName) ?? null;
}

function resolveRowVentureName(row = {}) {
  const directVenture = String(row?.venture ?? "").trim();
  if (directVenture) return directVenture;

  const projectName = String(row?.project ?? "").trim();
  if (projectName) {
    const projectRow = getProjectByName(projectName);
    const projectVenture = String(projectRow?.venture ?? "").trim();
    if (projectVenture) return projectVenture;
  }

  const taskTitle = String(row?.task ?? "").trim();
  if (taskTitle) {
    const taskRow = getTaskByTitle(taskTitle);
    if (taskRow) {
      const taskVenture = String(taskRow.venture ?? "").trim();
      if (taskVenture) return taskVenture;
      const taskProject = String(taskRow.project ?? "").trim();
      if (taskProject) {
        const taskProjectRow = getProjectByName(taskProject);
        const projectVenture = String(taskProjectRow?.venture ?? "").trim();
        if (projectVenture) return projectVenture;
      }
    }
  }

  return "";
}

function getPersonLinkedVentures(personRow) {
  const personName = String(personRow?.name ?? "").trim();
  if (!personName) return [];

  const ventures = new Map();
  const addVenture = (ventureName) => {
    const normalized = String(ventureName ?? "").trim();
    if (!normalized || ventures.has(normalized)) return;
    const ventureRow = getVentureByName(normalized);
    if (!ventureRow) return;
    ventures.set(normalized, {
      label: getRecordReferenceLabel("ventures", ventureRow),
      tableKey: "ventures",
      id: ventureRow.id,
      row: ventureRow,
    });
  };

  addVenture(personRow.venture);

  (data.projects ?? [])
    .filter((item) => String(item.lead ?? "").trim() === personName)
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.tasks ?? [])
    .filter((item) => {
      const owner = String(item.owner ?? "").trim();
      const external = String(item.external_shared_with ?? "").trim();
      const assignees = Array.isArray(item.assignees) ? item.assignees.map((name) => String(name).trim()) : [];
      return owner === personName || external === personName || assignees.includes(personName);
    })
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.events ?? [])
    .filter((item) => Array.isArray(item.participants) && item.participants.map((name) => String(name).trim()).includes(personName))
    .forEach((item) => addVenture(resolveRowVentureName(item)));

  (data.documents ?? [])
    .filter((item) => Array.isArray(item.links) && item.links.map((value) => String(value).trim()).includes(personName))
    .forEach((item) => {
      addVenture(resolveRowVentureName(item));

      (Array.isArray(item.related_assets) ? item.related_assets : []).forEach((assetName) => {
        const assetRow = data.assets.find((asset) => String(asset.name ?? "").trim() === String(assetName).trim()) ?? null;
        addVenture(resolveRowVentureName(assetRow));
      });

      (Array.isArray(item.related_events) ? item.related_events : []).forEach((eventTitle) => {
        const eventRow = data.events.find((event) => String(event.title ?? "").trim() === String(eventTitle).trim()) ?? null;
        addVenture(resolveRowVentureName(eventRow));
      });

      (Array.isArray(item.related_transactions) ? item.related_transactions : []).forEach((reference) => {
        const transactionRow = data.transactions.find((transaction) => String(transaction.reference ?? "").trim() === String(reference).trim()) ?? null;
        addVenture(resolveRowVentureName(transactionRow));
      });
    });

  return Array.from(ventures.values());
}

function getVentureLinkedPeople(ventureRow) {
  const ventureName = String(ventureRow?.name ?? "").trim();
  if (!ventureName) return [];

  const people = new Map();
  const addPerson = (personName) => {
    const normalized = String(personName ?? "").trim();
    if (!normalized || people.has(normalized)) return;
    const personRow = getPersonByName(normalized);
    if (!personRow) return;
    people.set(normalized, createTreeLeafNode("people", personRow, getRecordReferenceLabel("people", personRow)));
  };

  (data.people ?? [])
    .filter((item) => String(item.venture ?? "").trim() === ventureName)
    .forEach((item) => addPerson(item.name));

  (data.projects ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => addPerson(item.lead));

  (data.tasks ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => {
      addPerson(item.owner);
      addPerson(item.external_shared_with);
      (Array.isArray(item.assignees) ? item.assignees : []).forEach(addPerson);
    });

  (data.events ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName)
    .forEach((item) => {
      (Array.isArray(item.participants) ? item.participants : []).forEach(addPerson);
    });

  (data.documents ?? [])
    .filter((item) => String(resolveRowVentureName(item)) === ventureName || (Array.isArray(item.links) && item.links.includes(ventureName)))
    .forEach((item) => {
      (Array.isArray(item.links) ? item.links : []).forEach(addPerson);
    });

  return Array.from(people.values());
}

function ensurePersonRecord(name, venture = "") {
  const normalizedName = String(name ?? "").trim();
  if (!normalizedName) return null;
  const existing = data.people.find((item) => String(item.name ?? "").trim() === normalizedName) ?? null;
  if (existing) return existing;

  const record = {
    id: `ppl_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    name: normalizedName,
    type: "Employee",
    email: "",
    phone: "",
    venture: String(venture ?? "").trim(),
    role_title: "",
    access_level: "Employee",
    status: "Active",
  };
  data.people.unshift(record);
  syncRecordToSupabase("people", record).catch((error) => {
    console.error("Failed to sync person to Supabase", error);
  });
  return record;
}

function formatLocalDateForInput(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatLocalDateTimeForInput(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function getHierarchyContext(record = null) {
  let venture = getFormFieldValue("venture") || String(record?.venture ?? "").trim();
  let project = getFormFieldValue("project") || String(record?.project ?? "").trim();
  let task = getFormFieldValue("task") || String(record?.task ?? "").trim();

  const taskRow = task ? getTaskByTitle(task) : null;
  const projectRow = project ? getProjectByName(project) : null;

  if (!project && taskRow?.project) {
    project = String(taskRow.project).trim();
  }

  const resolvedProjectRow = project ? getProjectByName(project) : projectRow;
  if (!venture && resolvedProjectRow?.venture) {
    venture = String(resolvedProjectRow.venture).trim();
  }

  if (!venture && taskRow?.project) {
    const taskProject = getProjectByName(taskRow.project);
    if (taskProject?.venture) {
      venture = String(taskProject.venture).trim();
    }
  }

  return { venture, project, task };
}

function getRecordAddedAt(row) {
  return row?.createdAt ? new Date(row.createdAt).getTime() : 0;
}

function mapRecordToSupabase(tableKey, record) {
  const { createdAt, ...rest } = record;
  const defaults = jsonColumnDefaults[tableKey] ?? {};
  const normalized = Object.fromEntries(
    Object.entries(rest).map(([column, value]) => [column, value === "" ? null : value]),
  );
  Object.entries(defaults).forEach(([column, fallback]) => {
    if (normalized[column] == null || normalized[column] === "") {
      normalized[column] = Array.isArray(fallback) ? [...fallback] : fallback;
    }
  });
  return {
    ...normalized,
    created_at: createdAt ?? new Date().toISOString(),
  };
}

function mapRecordFromSupabase(tableKey, row) {
  const { created_at, ...rest } = row;
  return {
    ...rest,
    createdAt: created_at ?? null,
  };
}

async function hydrateDataFromSupabase() {
  if (!supabaseClient) {
    throw new Error("Supabase client unavailable on window");
  }
  const entries = await Promise.all(tables.map(async (table) => {
    const { data: rows, error } = await supabaseClient
      .from(table.key)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return [table.key, (rows ?? []).map((row) => mapRecordFromSupabase(table.key, row))];
  }));

  entries.forEach(([tableKey, rows]) => {
    data[tableKey] = rows;
  });
}

async function syncRecordToSupabase(tableKey, record) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const payload = mapRecordToSupabase(tableKey, record);
  const hasExistingRecord = data[tableKey]?.some((item) => item.id === record.id);
  const query = hasExistingRecord
    ? supabaseClient.from(tableKey).update(payload).eq("id", record.id)
    : supabaseClient.from(tableKey).insert(payload);
  const { error } = await query;
  if (error) throw error;
}

async function removeRecordFromSupabase(tableKey, recordId) {
  if (!REMOTE_TABLE_KEYS.has(tableKey) || !supabaseClient) return;
  const { error } = await supabaseClient.from(tableKey).delete().eq("id", recordId);
  if (error) throw error;
}

function getRecordFilterState(tableKey) {
  if (!state.recordFilters[tableKey]) {
    state.recordFilters[tableKey] = {
      venture: "all",
      project: "all",
      type: "all",
      status: "all",
      order: "newest",
    };
  }
  return state.recordFilters[tableKey];
}

function getFilterOptions(tableKey, fieldName) {
  const rows = data[tableKey] ?? [];
  const values = new Set();
  const targetTableKey = fieldName === "venture" ? "ventures" : fieldName === "project" ? "projects" : null;

  rows.forEach((row) => {
    const rawValue = row?.[fieldName];
    if (Array.isArray(rawValue)) {
      rawValue.forEach((item) => values.add(String(item)));
    } else if (rawValue) {
      values.add(String(rawValue));
    }

    if (!targetTableKey) return;

    const connections = getRecordConnections(tableKey, row);
    connections.forEach((connection) => {
      connection.items.forEach((item) => {
        if (item.tableKey === targetTableKey) {
          const label = getRecordLabel(item.tableKey, item.row);
          if (label) values.add(String(label));
        }
      });
    });
  });

  return Array.from(values).sort((a, b) => a.localeCompare(b));
}

function getRowFilterMatchValue(row, fieldName) {
  const value = row?.[fieldName];
  if (Array.isArray(value)) return value.map((item) => getEntryLabel(item)).filter(Boolean);
  return value ? [String(value)] : [];
}

function getLinkedFilterValues(tableKey, row, fieldName) {
  const targetTableKey = fieldName === "venture" ? "ventures" : fieldName === "project" ? "projects" : null;
  if (!targetTableKey) return [];

  const values = [];
  const connections = getRecordConnections(tableKey, row);
  connections.forEach((connection) => {
    connection.items.forEach((item) => {
      if (item.tableKey === targetTableKey) {
        const label = getRecordLabel(item.tableKey, item.row);
        if (label) values.push(String(label));
      }
    });
  });
  return values;
}

function getFilteredAndSortedRows(table) {
  const query = state.search.trim().toLowerCase();
  const filters = getRecordFilterState(table.key);

  let rows = data[table.key].filter((row) => {
    if (query) {
      const matchesSearch = table.listColumns.some((column) => formatCell(table.key, column, row).toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (filters.venture !== "all") {
      const ventureValues = getRowFilterMatchValue(row, "venture");
      const linkedVentureValues = getLinkedFilterValues(table.key, row, "venture");
      if (![...ventureValues, ...linkedVentureValues].includes(filters.venture)) return false;
    }

    if (filters.project !== "all") {
      const projectValues = getRowFilterMatchValue(row, "project");
      const linkedProjectValues = getLinkedFilterValues(table.key, row, "project");
      if (![...projectValues, ...linkedProjectValues].includes(filters.project)) return false;
    }

    if (table.key === "documents" && filters.type !== "all") {
      if (String(row.type || "") !== filters.type) return false;
    }

    if (table.key === "documents" && filters.status !== "all") {
      if (String(row.status || "") !== filters.status) return false;
    }

    return true;
  });

  rows = rows.slice().sort((left, right) => {
    const diff = getRecordAddedAt(right) - getRecordAddedAt(left);
    return filters.order === "oldest" ? -diff : diff;
  });

  return rows;
}

function getRelationConfig(fieldName) {
  return relationFields[fieldName] ?? null;
}

function getRelationOptions(fieldName, currentTableKey, record = null) {
  const relation = getRelationConfig(fieldName);
  if (!relation) return [];

  const sourceTables = relation.tables ?? [relation.table];
  const hierarchy = getHierarchyContext(record);
  return sortOptionsAlpha(sourceTables.flatMap((tableKey) => {
    const table = tables.find((item) => item.key === tableKey);
    const rows = data[tableKey] ?? [];
    return rows
      .filter((row) => {
        if (currentTableKey === "tasks" && fieldName === "project") {
          if (!hierarchy.venture) return false;
          return String(row.venture ?? "") === hierarchy.venture;
        }

        if (hierarchyAttachmentTables.has(currentTableKey) && fieldName === "project") {
          if (!hierarchy.venture) return false;
          return String(row.venture ?? "") === hierarchy.venture;
        }

        if (hierarchyAttachmentTables.has(currentTableKey) && fieldName === "task") {
          if (!hierarchy.project) return false;
          return String(row.project ?? "") === hierarchy.project;
        }

        return true;
      })
      .filter((row) => !((fieldName === "parent_task" || fieldName === "depends_on") && currentTableKey === "tasks" && row.id === record?.id))
      .map((row) => {
        const value = relation.labelField ? row[relation.labelField] : getRecordLabel(tableKey, row);
        const display = sourceTables.length > 1 && table ? `${value} (${table.title})` : value;
        return {
          value: String(value ?? ""),
          label: String(display ?? ""),
        };
      })
      .filter((option) => option.value);
  }));
}

function getTableByKey(tableKey) {
  return tables.find((item) => item.key === tableKey) ?? null;
}

function getRowsByFieldValue(tableKey, fieldName, value) {
  const rows = data[tableKey] ?? [];
  return rows.filter((row) => {
    const fieldValue = row[fieldName];
    if (Array.isArray(fieldValue)) return fieldValue.map(String).includes(String(value));
    return String(fieldValue ?? "") === String(value);
  });
}

function getLinkedDocumentsForRecord(targetTableKey, value) {
  const fieldName = targetTableKey === "assets"
    ? "related_assets"
    : targetTableKey === "events"
      ? "related_events"
      : targetTableKey === "transactions"
        ? "related_transactions"
        : null;

  if (!fieldName) return [];

  return (data.documents ?? []).filter((row) => {
    if (Array.isArray(row.links) && row.links.map(String).includes(String(value))) return true;
    const fieldValue = row[fieldName];
    if (Array.isArray(fieldValue)) return fieldValue.map(String).includes(String(value));
    return false;
  });
}

function getRecordReferenceLabel(tableKey, row) {
  const primary = tableKey === "people"
    ? formatPersonDisplayLabel(row)
    : row.name || row.title || row.reference || row.id;
  return String(primary ?? "");
}

function getRecordConnections(tableKey, record) {
  const connections = [];
  const row = record ?? {};
  const rowLabel = getRecordLabel(tableKey, row);
  const getConnectionLabel = (targetKey, fallback = "") => getTableByKey(targetKey)?.title ?? titleCaseKey(fallback || targetKey);
  const normalizeConnections = (items) => {
    const grouped = new Map();

    items.forEach((connection) => {
      const groupKey = `${connection.key ?? connection.label}:${connection.label}`;
      if (!grouped.has(groupKey)) {
        grouped.set(groupKey, {
          ...connection,
          items: [],
        });
      }

      const group = grouped.get(groupKey);
      if (connection.kind === "linked") group.kind = "linked";
      group.items.push(...connection.items);
    });

    return Array.from(grouped.values()).map((connection) => {
      const seen = new Set();
      connection.items = connection.items.filter((item) => {
        const itemKey = `${item.tableKey}:${item.id ?? item.label}`;
        if (seen.has(itemKey)) return false;
        seen.add(itemKey);
        return true;
      });
      return connection;
    });
  };

  const findRelatedRecord = (sourceTables, value, relation) => {
    for (const sourceTableKey of sourceTables) {
      const rows = data[sourceTableKey] ?? [];
      const found = rows.find((candidate) => {
        const candidateValue = relation?.labelField ? candidate[relation.labelField] : getRecordLabel(sourceTableKey, candidate);
        return String(candidateValue) === String(value);
      });
      if (found) {
        return {
          label: getRecordReferenceLabel(sourceTableKey, found),
          tableKey: sourceTableKey,
          id: found.id,
          row: found,
        };
      }
    }
    return null;
  };

  const addConnection = (label, items, key = null, kind = "linked") => {
    if (!items.length) return;
    connections.push({ label: getConnectionLabel(key, label), key, kind, items });
  };

  const relations = Object.entries(relationFields);
  relations.forEach(([fieldName, relation]) => {
    if (tableKey === "assets" && fieldName === "owner_ventures") return;
    const value = row[fieldName];
    if (!value) return;
    const sourceTables = relation.tables ?? [relation.table];
    const values = Array.isArray(value) ? value : [value];
    const items = values
      .map((item) => {
        const normalized = getEntryLabel(item);
        return findRelatedRecord(sourceTables, normalized, relation);
      })
      .filter(Boolean);
    addConnection(fieldName.replaceAll("_", " "), items, sourceTables[0], "context");
  });

  if (tableKey === "ventures") {
    addConnection(
      "people",
      getRowsByFieldValue("people", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("people", item),
        tableKey: "people",
        id: item.id,
        row: item,
      })),
      "people",
      "linked",
    );
    addConnection(
      "projects",
      getRowsByFieldValue("projects", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("projects", item),
        tableKey: "projects",
        id: item.id,
        row: item,
      })),
      "projects",
      "linked",
    );
    addConnection(
      "transactions",
      getRowsByFieldValue("transactions", "venture", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("transactions", item),
        tableKey: "transactions",
        id: item.id,
        row: item,
      })),
      "transactions",
      "linked",
    );
  }

  if (tableKey === "assets") {
    const ownerItems = (Array.isArray(row.owner_ventures) ? row.owner_ventures : [])
      .map((entry) => {
        const ventureName = getEntryLabel(entry);
        if (!ventureName) return null;
        const found = data.ventures.find((item) => item.name === ventureName) ?? null;
        if (!found) return null;
        const stake = getEntryStake(entry);
        return {
          label: `${found.name}${stake ? ` · ${stake}%` : ""}`,
          tableKey: "ventures",
          id: found.id,
          row: found,
        };
      })
      .filter(Boolean);
    addConnection("ventures", ownerItems, "ventures", "context");
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("assets", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "projects") {
    addConnection(
      "tasks",
      getRowsByFieldValue("tasks", "project", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
    addConnection(
      "events",
      getRowsByFieldValue("events", "project", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("events", item),
        tableKey: "events",
        id: item.id,
        row: item,
      })),
      "events",
      "linked",
    );
    addConnection(
      "documents",
      getRowsByFieldValue("documents", "links", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "people") {
    addConnection(
      "ventures",
      getPersonLinkedVentures(row),
      "ventures",
      "context",
    );
    addConnection(
      "projects",
      getRowsByFieldValue("projects", "lead", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("projects", item),
        tableKey: "projects",
        id: item.id,
        row: item,
      })),
      "projects",
      "linked",
    );
    addConnection(
      "tasks",
      (data.tasks ?? [])
        .filter((item) => {
          const owner = String(item.owner ?? "").trim();
          const external = String(item.external_shared_with ?? "").trim();
          const assignees = Array.isArray(item.assignees) ? item.assignees.map((name) => String(name).trim()) : [];
          return owner === rowLabel || external === rowLabel || assignees.includes(rowLabel);
        })
        .map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
    addConnection(
      "events",
      getRowsByFieldValue("events", "participants", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("events", item),
        tableKey: "events",
        id: item.id,
        row: item,
      })),
      "events",
      "linked",
    );
    addConnection(
      "documents",
      getRowsByFieldValue("documents", "links", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "tasks") {
    const taskPeople = [
      row.owner
        ? { name: row.owner, suffix: "Owner" }
        : null,
      ...(Array.isArray(row.assignees) ? row.assignees.map((name) => ({ name, suffix: "Assignee" })) : []),
      row.external_shared_with
        ? { name: row.external_shared_with, suffix: "External" }
        : null,
    ]
      .filter(Boolean)
      .map(({ name, suffix }) => {
        const found = data.people.find((item) => item.name === name) ?? null;
        if (!found) return null;
        return {
          label: `${formatPersonDisplayLabel(found)} · ${suffix}`,
          tableKey: "people",
          id: found.id,
          row: found,
        };
      })
      .filter((item, index, array) => item && array.findIndex((candidate) => candidate.id === item.id) === index);

    addConnection("people", taskPeople, "people", "linked");

    addConnection(
      "subtasks",
      getRowsByFieldValue("tasks", "parent_task", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("tasks", item),
        tableKey: "tasks",
        id: item.id,
        row: item,
      })),
      "tasks",
      "linked",
    );
  }

  if (tableKey === "events") {
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("events", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  if (tableKey === "transactions") {
    addConnection(
      "documents",
      getLinkedDocumentsForRecord("transactions", rowLabel).map((item) => ({
        label: getRecordReferenceLabel("documents", item),
        tableKey: "documents",
        id: item.id,
        row: item,
      })),
      "documents",
      "linked",
    );
  }

  return normalizeConnections(connections);
}

function getTreeNodeKey(tableKey, record) {
  return `${tableKey}:${record?.id ?? record?.name ?? record?.title ?? ""}`;
}

function shouldExpandTreeItem(rootTableKey, parentTableKey, depth, childTableKey) {
  if (rootTableKey === "ventures") {
    if (depth === 0) return childTableKey === "projects";
    if (depth === 1 && parentTableKey === "projects") {
      return ["tasks", "events", "documents"].includes(childTableKey);
    }
    if (depth === 2 && parentTableKey === "tasks") {
      return ["people", "tasks"].includes(childTableKey);
    }
    return false;
  }

  if (rootTableKey === "projects") {
    if (depth === 0) {
      return ["tasks", "events", "documents"].includes(childTableKey);
    }
    if (depth === 1 && parentTableKey === "tasks") {
      return ["people", "tasks"].includes(childTableKey);
    }
    return false;
  }

  if (rootTableKey === "tasks" && depth === 0) {
    return ["people", "tasks"].includes(childTableKey);
  }

  return false;
}

function getTreeNodeToneClass(tableKey, record) {
  if (tableKey === "people") {
    const ventureName = record?.venture || "";
    if (!ventureName || ventureName === "ATIT") return "";
    return getVentureTone(ventureName);
  }

  if (tableKey === "ventures") {
    const ventureName = record?.name || "";
    if (!ventureName || ventureName === "ATIT") return "";
    return getVentureTone(ventureName);
  }

  return "";
}

function createTreeLeafNode(tableKey, row, label = null) {
  return {
    id: row?.id ?? null,
    tableKey,
    label: label || getRecordLabel(tableKey, row),
    iconKey: tableKey,
    toneClass: getTreeNodeToneClass(tableKey, row),
    isRoot: false,
    children: [],
  };
}

function getTaskPeopleTreeNodes(taskRow) {
  const nodes = [
    taskRow.owner
      ? { name: taskRow.owner, suffix: "Owner" }
      : null,
    ...(Array.isArray(taskRow.assignees) ? taskRow.assignees.map((name) => ({ name, suffix: "Assignee" })) : []),
    taskRow.external_shared_with
      ? { name: taskRow.external_shared_with, suffix: "External" }
      : null,
  ]
    .filter(Boolean)
    .map(({ name, suffix }) => {
      const found = data.people.find((item) => item.name === name) ?? null;
      if (!found) return null;
      return createTreeLeafNode("people", found, `${formatPersonDisplayLabel(found)} · ${suffix}`);
    })
    .filter(Boolean);

  const seen = new Set();
  return nodes.filter((node) => {
    const key = `${node.tableKey}:${node.id}:${node.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getStructuredLeafNodes(tableKey, rows) {
  return rows.map((row) => createTreeLeafNode(tableKey, row, getRecordReferenceLabel(tableKey, row)));
}

function pushStructuredGroup(children, label, tableKey, rows) {
  const nodes = getStructuredLeafNodes(tableKey, rows);
  if (!nodes.length) return;
  children.push({
    isGroup: true,
    label,
    children: nodes,
  });
}

function buildStructuredTaskNode(taskRow, options = {}) {
  const children = [];

  if (options.includeProject && taskRow.project) {
    const projectRow = data.projects.find((item) => item.name === taskRow.project) ?? null;
    if (projectRow) {
      children.push({
        isGroup: true,
        label: "Projects",
        children: [createTreeLeafNode("projects", projectRow, getRecordReferenceLabel("projects", projectRow))],
      });
    }
  }

  const peopleNodes = getTaskPeopleTreeNodes(taskRow);
  if (peopleNodes.length) {
    children.push({
      isGroup: true,
      label: "People",
      children: peopleNodes,
    });
  }

  const subtaskNodes = (data.tasks ?? [])
    .filter((item) => String(item.parent_task || "") === String(taskRow.title || ""))
    .map((item) => buildStructuredTaskNode(item));

  pushStructuredGroup(
    children,
    "Assets",
    "assets",
    (data.assets ?? []).filter((item) => item.task === taskRow.title),
  );

  pushStructuredGroup(
    children,
    "Events",
    "events",
    (data.events ?? []).filter((item) => item.task === taskRow.title),
  );

  pushStructuredGroup(
    children,
    "Documents",
    "documents",
    (data.documents ?? []).filter((item) => item.task === taskRow.title || (Array.isArray(item.links) && item.links.includes(taskRow.title))),
  );

  pushStructuredGroup(
    children,
    "Transactions",
    "transactions",
    (data.transactions ?? []).filter((item) => item.task === taskRow.title),
  );

  if (subtaskNodes.length) {
    children.push({
      isGroup: true,
      label: "Tasks",
      children: subtaskNodes,
    });
  }

  return {
    id: taskRow.id,
    tableKey: "tasks",
    label: getRecordLabel("tasks", taskRow),
    iconKey: "tasks",
    toneClass: "",
    isRoot: false,
    children,
  };
}

function buildStructuredProjectNode(projectRow, options = {}) {
  const children = [];

  if (options.includeVenture && projectRow.venture) {
    const ventureRow = data.ventures.find((item) => item.name === projectRow.venture) ?? null;
    if (ventureRow) {
      children.push({
        isGroup: true,
        label: "Ventures",
        children: [createTreeLeafNode("ventures", ventureRow, getRecordReferenceLabel("ventures", ventureRow))],
      });
    }
  }

  const taskNodes = (data.tasks ?? [])
    .filter((item) => item.project === projectRow.name && !item.parent_task)
    .map((item) => buildStructuredTaskNode(item));

  pushStructuredGroup(
    children,
    "Assets",
    "assets",
    (data.assets ?? []).filter((item) => item.project === projectRow.name),
  );

  pushStructuredGroup(
    children,
    "Events",
    "events",
    (data.events ?? []).filter((item) => item.project === projectRow.name),
  );

  pushStructuredGroup(
    children,
    "Documents",
    "documents",
    (data.documents ?? []).filter((item) => item.project === projectRow.name || (Array.isArray(item.links) && item.links.includes(projectRow.name))),
  );

  pushStructuredGroup(
    children,
    "Transactions",
    "transactions",
    (data.transactions ?? []).filter((item) => item.project === projectRow.name),
  );

  if (taskNodes.length) {
    children.push({
      isGroup: true,
      label: "Tasks",
      children: taskNodes,
    });
  }

  return {
    id: projectRow.id,
    tableKey: "projects",
    label: getRecordLabel("projects", projectRow),
    iconKey: "projects",
    toneClass: getTreeNodeToneClass("projects", projectRow),
    isRoot: false,
    children,
  };
}

function buildStructuredTree(tableKey, record) {
  if (tableKey === "ventures") {
    const children = [];
    const venturePeople = getVentureLinkedPeople(record);
    if (venturePeople.length) {
      children.push({
        isGroup: true,
        label: "People",
        children: venturePeople,
      });
    }

    const projectNodes = (data.projects ?? [])
      .filter((item) => item.venture === record.name)
      .map((item) => buildStructuredProjectNode(item));

    if (projectNodes.length) {
      children.push({
        isGroup: true,
        label: "Projects",
        children: projectNodes,
      });
    }

    pushStructuredGroup(
      children,
      "Events",
      "events",
      (data.events ?? []).filter((item) => item.venture === record.name),
    );

    pushStructuredGroup(
      children,
      "Assets",
      "assets",
      (data.assets ?? []).filter((item) => item.venture === record.name),
    );

    pushStructuredGroup(
      children,
      "Documents",
      "documents",
      (data.documents ?? []).filter((item) => item.venture === record.name || (Array.isArray(item.links) && item.links.includes(record.name))),
    );

    pushStructuredGroup(
      children,
      "Transactions",
      "transactions",
      (data.transactions ?? []).filter((item) => item.venture === record.name),
    );

    return {
      id: record.id,
      tableKey,
      label: getRecordLabel(tableKey, record),
      iconKey: tableKey,
      toneClass: getTreeNodeToneClass(tableKey, record),
      isRoot: true,
      children,
    };
  }

  if (tableKey === "projects") {
    const root = buildStructuredProjectNode(record, { includeVenture: true });
    return { ...root, isRoot: true };
  }

  if (tableKey === "tasks") {
    const root = buildStructuredTaskNode(record, { includeProject: true });
    return { ...root, isRoot: true };
  }

  return null;
}

function buildConnectionTree(tableKey, record, depth = 0, visited = new Set(), rootTableKey = tableKey) {
  const structuredRoot = depth === 0 ? buildStructuredTree(tableKey, record) : null;
  if (structuredRoot) return structuredRoot;

  const nodeKey = getTreeNodeKey(tableKey, record);
  const nextVisited = new Set(visited);
  nextVisited.add(nodeKey);

  if (depth >= 4) {
    return null;
  }

  const connections = getRecordConnections(tableKey, record)
    .filter((connection) => depth === 0 || connection.kind !== "context");
  const children = [];

  connections.forEach((connection) => {
    const branchChildren = connection.items
      .map((item) => {
        if (!item?.row || !item?.id) return null;
        const childKey = getTreeNodeKey(item.tableKey, item.row);
        if (nextVisited.has(childKey)) return null;

        const shouldExpandChild = shouldExpandTreeItem(rootTableKey, tableKey, depth, item.tableKey);
        if (!shouldExpandChild) {
          return {
            id: item.id,
            tableKey: item.tableKey,
            label: item.label || getRecordLabel(item.tableKey, item.row),
            iconKey: item.tableKey,
            toneClass: getTreeNodeToneClass(item.tableKey, item.row),
            isRoot: false,
            children: [],
          };
        }

        return buildConnectionTree(item.tableKey, item.row, depth + 1, nextVisited, rootTableKey);
      })
      .filter(Boolean);

    if (!branchChildren.length) return;

    children.push({
      isGroup: true,
      label: connection.label,
      children: branchChildren,
    });
  });

  return {
    id: record.id,
    tableKey,
    label: getRecordLabel(tableKey, record),
    iconKey: tableKey,
    toneClass: getTreeNodeToneClass(tableKey, record),
    isRoot: depth === 0,
    children,
  };
}

function renderConnectionTreeNode(node) {
  const baseClass = node.isRoot
    ? "connection-node connection-node-root"
    : node.isGroup
      ? "connection-node connection-node-group"
      : "connection-node";
  const nodeClass = `${baseClass}${node.toneClass ? ` ${node.toneClass}` : ""}`;
  const shouldStackChildren = node.isGroup
    && node.children?.length > 1
    && ["Assets", "Documents", "Transactions"].includes(node.label);

  const attrs = node.isGroup
    ? ""
    : `type="button" data-tree-open="${escapeHtml(node.tableKey)}" data-tree-record="${escapeHtml(node.id ?? "")}"`;

  const iconMarkup = !node.isGroup && node.iconKey
    ? `<span class="connection-node-icon" aria-hidden="true">${getTableIcon(node.iconKey)}</span>`
    : "";

  return `
    <li${shouldStackChildren ? ' class="tree-group-stack-vertical"' : ""}>
      ${node.isGroup
        ? `<div class="${nodeClass}"><span>${escapeHtml(node.label)}</span></div>`
        : `<button class="${nodeClass}" ${attrs}>${iconMarkup}<span>${escapeHtml(node.label)}</span></button>`}
      ${node.children?.length ? `<ul>${node.children.map((child) => renderConnectionTreeNode(child)).join("")}</ul>` : ""}
    </li>
  `;
}

function renderDetailTree(tableKey, record) {
  const root = buildStructuredTree(tableKey, record) ?? buildConnectionTree(tableKey, record);

  if (!root || !root.children.length) {
    return `<div class="detail-empty">No connected records found.</div>`;
  }

  return `
    <div class="detail-tree-canvas">
      <div class="detail-tree-graph">
        <ul class="detail-tree-list">
          ${renderConnectionTreeNode(root)}
        </ul>
      </div>
    </div>
  `;
}

function getExpandedLinkedGroups(tableKey, record) {
  const root = buildStructuredTree(tableKey, record) ?? buildConnectionTree(tableKey, record);
  if (!root) return [];

  const grouped = new Map();
  const seen = new Set();

  const visit = (node) => {
    if (!node) return;
    if (node.isGroup) {
      node.children?.forEach(visit);
      return;
    }

    if (!node.isRoot && node.id) {
      const itemKey = `${node.tableKey}:${node.id}`;
      if (!seen.has(itemKey)) {
        seen.add(itemKey);
        if (!grouped.has(node.tableKey)) grouped.set(node.tableKey, []);
        const sourceRow = data[node.tableKey]?.find((item) => item.id === node.id) ?? null;
        grouped.get(node.tableKey).push({
          label: getRecordReferenceLabel(node.tableKey, sourceRow ?? node),
          tableKey: node.tableKey,
          id: node.id,
          row: sourceRow,
        });
      }
    }

    node.children?.forEach(visit);
  };

  visit(root);

  return tables
    .filter((table) => grouped.has(table.key))
    .map((table) => ({
      label: table.title,
      key: table.key,
      items: grouped.get(table.key),
    }));
}

function renderRecordDetail(table, record) {
  const detailIconTone = getDetailIconTone(table.key, record);
  const rows = table.fields.map((field) => {
    const value = getFieldDisplayValue(field, record);
    const display = Array.isArray(record?.[field.name]) ? record[field.name].join(", ") : value || "—";
    return `
      <div class="detail-field">
        <div class="detail-field-label">${escapeHtml(field.label)} :</div>
        <div class="detail-field-value">${escapeHtml(display)}</div>
      </div>
    `;
  }).join("");

  const connections = table.key === "ventures"
    ? getExpandedLinkedGroups(table.key, record)
    : getRecordConnections(table.key, record);
  const primaryVenture = String(record?.venture ?? record?.name ?? "").trim();

  const renderLinkedRows = (items, offset = 1) => items.map((item, index) => `
    <button class="linked-record-row" type="button" data-tree-open="${escapeHtml(item.tableKey)}" data-tree-record="${escapeHtml(item.id ?? "")}">
      <span class="linked-record-serial">${renderSerialNumber(index + offset)}</span>
      <span class="linked-record-label">${escapeHtml(item.label)}</span>
    </button>
  `).join("");

  const renderPeopleGroups = (items) => {
    const grouped = new Map();
    items.forEach((item) => {
      const ventureName = String(item?.row?.venture ?? "Unassigned").trim() || "Unassigned";
      if (!grouped.has(ventureName)) grouped.set(ventureName, []);
      grouped.get(ventureName).push(item);
    });

    const sortedGroupNames = Array.from(grouped.keys()).sort((a, b) => {
      if (a === primaryVenture) return -1;
      if (b === primaryVenture) return 1;
      return a.localeCompare(b);
    });

    return sortedGroupNames.map((ventureName) => {
      const groupItems = grouped.get(ventureName) ?? [];
      return `
        <div class="detail-linked-subgroup">
          <div class="detail-linked-subgroup-head">
            <span class="detail-linked-subgroup-title">${escapeHtml(ventureName)}</span>
            <span class="detail-linked-subgroup-count">(${groupItems.length})</span>
          </div>
          <div class="detail-linked-list detail-linked-list-subgroup">
            ${renderLinkedRows(groupItems)}
          </div>
        </div>
      `;
    }).join("");
  };

  return `
    <div class="detail-view">
      <div class="detail-header">
        <div class="detail-header-main">
          <button class="detail-back-button" type="button" data-detail-action="back" aria-label="Back to list">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <div class="detail-title-block">
            <span class="detail-title-icon ${escapeHtml(detailIconTone)}" aria-hidden="true">${getTableIcon(table.key)}</span>
            <div class="detail-title-copy">
              <div class="detail-eyebrow">${escapeHtml(table.title)}</div>
              <h2>${escapeHtml(record.name || record.title || record.reference || table.singular)}</h2>
            </div>
          </div>
        </div>
        <div class="detail-actions">
          <button class="record-action-button" type="button" data-detail-action="tree">${state.detailTreeOpen ? "Hide tree" : "Tree view"}</button>
          <button class="record-action-button" type="button" data-detail-action="edit">Edit</button>
          <button class="record-action-button" type="button" data-detail-action="delete">Delete</button>
        </div>
      </div>
      <div class="detail-grid">
        ${rows}
      </div>
      <section class="detail-linked">
        <div class="detail-linked-head">
          <h3>Linked records - auto-assembled</h3>
        </div>
        ${state.detailTreeOpen ? `<div class="detail-tree">${renderDetailTree(table.key, record)}</div>` : `
          <div class="detail-linked-groups">
            ${connections.map((connection) => `
              <div class="detail-linked-group">
                <div class="detail-linked-group-head">
                  <span class="detail-linked-group-icon" aria-hidden="true">${getTableIcon(connection.key || "")}</span>
                  <span class="detail-linked-group-title">${escapeHtml(connection.label)}</span>
                  <span class="detail-linked-group-count">(${connection.items.length})</span>
                </div>
                ${connection.key === "people" ? renderPeopleGroups(connection.items) : `
                  <div class="detail-linked-list">
                    ${renderLinkedRows(connection.items)}
                  </div>
                `}
              </div>
            `).join("")}
          </div>
        `}
      </section>
    </div>
  `;
}

function allRecords() {
  return Object.entries(data)
    .filter(([, value]) => Array.isArray(value))
    .flatMap(([table, rows]) => rows.map((row) => ({ table, ...row })));
}

function countLinks() {
  const fields = ["venture", "project", "task", "parent_task", "assignees", "depends_on", "external_shared_with", "links", "participants", "owner_ventures"];
  return Object.values(data).reduce((sum, table) => {
    if (!Array.isArray(table)) return sum;
    return sum + table.reduce((tableSum, row) => {
      return tableSum + fields.reduce((fieldSum, field) => {
        const value = row[field];
        if (Array.isArray(value)) return fieldSum + value.length;
        return value ? fieldSum + 1 : fieldSum;
      }, 0);
    }, 0);
  }, 0);
}

function renderMeta() {
  return;
}

function getSidebarToggleIcon() {
  return state.sidebarCollapsed
    ? `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    `
    : `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    `;
}

function applySidebarState() {
  el.layout.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  el.sidebarToggle.innerHTML = getSidebarToggleIcon();
  el.sidebarToggle.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  el.sidebarToggle.setAttribute("aria-label", state.sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar");
}

function renderSidebarNav() {
  el.sidebarNav.innerHTML = sidebarItems.map((item) => {
    const count = item.kind === "table" ? `<span class="sidebar-nav-count">${data[item.key].length}</span>` : "";
    const active = state.activeNav === item.key ? "active" : "";
    const dividerClass = ["dashboard", "transactions"].includes(item.key) ? " sidebar-nav-item-divider" : "";
    return `
      <button class="sidebar-nav-item ${active}${dividerClass}" type="button" data-sidebar-key="${item.key}" data-sidebar-kind="${item.kind}" data-sidebar-label="${escapeHtml(item.label)}" aria-label="${escapeHtml(item.label)}" title="${escapeHtml(item.label)}">
        <span class="sidebar-nav-icon" aria-hidden="true">${getTableIcon(item.key)}</span>
        <span class="sidebar-nav-label">${escapeHtml(item.label)}</span>
        ${count}
      </button>
    `;
  }).join("");

  el.sidebarNav.querySelectorAll("[data-sidebar-key]").forEach((button) => {
    button.addEventListener("click", () => {
      const { sidebarKey, sidebarKind } = button.dataset;
      state.activeNav = sidebarKey;
      state.search = "";
      state.detailTableKey = null;
      state.detailRecordId = null;
      state.detailTreeOpen = false;
      clearDetailHistory();
      if (el.modal?.classList.contains("open")) closeForm();
      renderSidebarNav();
      if (sidebarKind === "table") {
        state.activeTable = sidebarKey;
      }
      renderHeroPanel();
    });
  });
}

function getCurrentSidebarUser() {
  return userAccounts.find((user) => user.role === state.role) ?? userAccounts[0];
}

function getInitials(name) {
  return String(name || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function renderSidebarFooter() {
  const user = getCurrentSidebarUser();
  if (!user || !el.sidebarFooter) return;

  el.sidebarFooter.innerHTML = `
    <div class="sidebar-user-card">
      <div class="sidebar-user-avatar">${escapeHtml(getInitials(user.name) || "AT")}</div>
      <div class="sidebar-user-copy">
        <div class="sidebar-user-name">${escapeHtml(user.name)}</div>
        <div class="sidebar-user-role">${escapeHtml(user.role)}</div>
      </div>
      <button id="sidebar-logout" class="sidebar-logout" type="button" aria-label="Logout" title="Logout">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M15 17l5-5-5-5"></path>
          <path d="M20 12H9"></path>
          <path d="M13 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        </svg>
      </button>
    </div>
  `;

  document.getElementById("sidebar-logout")?.addEventListener("click", () => {
    state.activeNav = "dashboard";
    state.search = "";
    state.detailTableKey = null;
    state.detailRecordId = null;
    state.detailTreeOpen = false;
    clearDetailHistory();
    renderSidebarNav();
    renderSidebarFooter();
    renderHeroPanel();
  });
}

function renderBoard() {
  el.board.innerHTML = visibleSidebarTables.map((table) => `
    <article class="table-tile" data-open-list="${table.key}">
      <div class="table-tile-head">
        <div class="table-count">${data[table.key].length}</div>
        <button class="table-action-button" type="button" data-open-form="${table.key}" aria-label="Add ${escapeHtml(table.singular || table.title)}">+</button>
      </div>
      <div class="table-meta">
        <span class="table-icon" aria-hidden="true">${getTableIcon(table.key)}</span>
        <div class="table-title">${escapeHtml(table.title)}</div>
      </div>
    </article>
  `).join("");

    el.board.querySelectorAll("[data-open-list]").forEach((card) => {
      card.addEventListener("click", () => {
        state.activeNav = card.dataset.openList;
        state.activeTable = card.dataset.openList;
        state.search = "";
        clearDetailHistory();
        renderSidebarNav();
        renderHeroPanel();
      });
    });

  el.board.querySelectorAll("[data-open-form]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openForm(button.dataset.openForm);
    });
  });
}

function getTodayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: APP_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const year = parts.find((part) => part.type === "year")?.value ?? "0000";
  const month = parts.find((part) => part.type === "month")?.value ?? "00";
  const day = parts.find((part) => part.type === "day")?.value ?? "00";
  return `${year}-${month}-${day}`;
}

function formatDashboardDate(value, includeTime = false) {
  if (!value) return "No date";
  const normalized = includeTime && value.includes(" ") ? value.replace(" ", "T") : value;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;

  const options = includeTime
    ? { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }
    : { day: "2-digit", month: "short" };

  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

function getDateOnlyKey(value) {
  if (!value) return "";
  const normalized = String(value).trim();
  if (!normalized) return "";
  if (/^\d{4}-\d{2}-\d{2}/.test(normalized)) return normalized.slice(0, 10);

  const parsed = new Date(normalized.includes(" ") ? normalized.replace(" ", "T") : normalized);
  if (Number.isNaN(parsed.getTime())) return "";
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`;
}

function getLocalDateKey(value) {
  const date = value instanceof Date ? value : getDateAtDayStart(value);
  if (!date || Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getDateAtDayStart(value) {
  const key = getDateOnlyKey(value);
  return key ? new Date(`${key}T00:00:00`) : null;
}

function addDays(date, count) {
  const next = new Date(date);
  next.setDate(next.getDate() + count);
  return next;
}

function addMonths(date, count) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + count);
  return next;
}

function getDateDiffInDays(start, end) {
  return Math.round((end.getTime() - start.getTime()) / 86400000);
}

function getStartOfWeek(value = new Date()) {
  const base = value instanceof Date ? new Date(value) : (getDateAtDayStart(value) || new Date());
  base.setHours(0, 0, 0, 0);
  const weekdayOffset = (base.getDay() + 6) % 7;
  return addDays(base, -weekdayOffset);
}

function getCenteredWeekStart(value = new Date()) {
  const base = value instanceof Date ? new Date(value) : (getDateAtDayStart(value) || new Date());
  base.setHours(0, 0, 0, 0);
  return addDays(base, -2);
}

function getGanttWeekStart() {
  return state.ganttWeekStart
    ? (getDateAtDayStart(state.ganttWeekStart) || getCenteredWeekStart(getTodayKey()))
    : getCenteredWeekStart(getTodayKey());
}

function getGanttScale() {
  return state.ganttScale === "month" ? "month" : "week";
}

function setGanttScale(value) {
  state.ganttScale = value === "month" ? "month" : "week";
}

function setGanttWeekStart(value) {
  const next = value instanceof Date ? value : (getDateAtDayStart(value) || getCenteredWeekStart(getTodayKey()));
  state.ganttWeekStart = getLocalDateKey(next);
}

function syncGanttUrl(startDate, replace = false) {
  const nextUrl = getGanttViewHref(startDate);
  const currentUrl = `${window.location.pathname}${window.location.search}`;
  if (nextUrl === currentUrl) return;
  window.history[replace ? "replaceState" : "pushState"]({}, "", nextUrl);
}

function shiftGanttWindow(days) {
  const step = Number(days) || 0;
  const nextStart = getGanttScale() === "month"
    ? addMonths(getGanttWeekStart(), step)
    : addDays(getGanttWeekStart(), step);
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function jumpGanttMonth(months) {
  const nextStart = addMonths(getGanttWeekStart(), Number(months) || 0);
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function resetGanttToday() {
  const nextStart = getGanttScale() === "month"
    ? getDateAtDayStart(getTodayKey())
    : getCenteredWeekStart(getTodayKey());
  setGanttWeekStart(nextStart);
  syncGanttUrl(nextStart);
  renderHeroPanel();
}

function openGanttRecord(tableKey, recordId) {
  if (!tableKey || !recordId) return;
  openRecordDetail(tableKey, recordId, { preserveNav: true });
}

globalThis.shiftGanttWindow = shiftGanttWindow;
globalThis.jumpGanttMonth = jumpGanttMonth;
globalThis.resetGanttToday = resetGanttToday;
globalThis.openGanttRecord = openGanttRecord;

function getGanttViewHref(startDate) {
  const url = new URL(window.location.href);
  url.searchParams.set("view", "gantt");
  url.searchParams.set("gantt", getLocalDateKey(startDate instanceof Date ? startDate : getDateAtDayStart(startDate) || getGanttWeekStart()));
  url.searchParams.set("scale", getGanttScale());
  return `${url.pathname}${url.search}`;
}

function applyUrlState() {
  const params = new URLSearchParams(window.location.search);
  const view = params.get("view");
  const gantt = params.get("gantt");
  const scale = params.get("scale");

  if (view === "gantt") {
    state.activeNav = "gantt";
  }

  if (gantt) {
    state.ganttWeekStart = gantt;
  }
  if (scale) {
    setGanttScale(scale);
  }
}

function getDaysUntil(dateKey) {
  if (!dateKey) return null;
  const target = new Date(`${dateKey}T00:00:00`);
  if (Number.isNaN(target.getTime())) return null;
  const today = new Date(`${getTodayKey()}T00:00:00`);
  return Math.round((target.getTime() - today.getTime()) / 86400000);
}

function formatAttentionTiming(dateKey) {
  const days = getDaysUntil(dateKey);
  if (days == null) return "";
  if (days < 0) return `${Math.abs(days)}d late`;
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `In ${days}d`;
}

function getProjectLinkedSummary(projectName) {
  const openTasks = data.tasks
    .filter((task) => task.project === projectName && !["Done", "Cancelled"].includes(task.status));
  const upcomingEvents = data.events
    .filter((event) => event.project === projectName && event.date >= getTodayKey())
    .sort((left, right) => String(left.date).localeCompare(String(right.date)));

  return {
    taskCount: openTasks.length,
    nextTaskDate: openTasks.map((task) => task.due_date).filter(Boolean).sort()[0] ?? null,
    nextEventDate: upcomingEvents[0]?.date ?? null,
  };
}

function getTaskLinkedSummary(taskTitle, projectName) {
  const linkedProject = data.projects.find((project) => project.name === projectName) ?? null;
  const nextEvent = data.events
    .filter((event) => event.date >= getTodayKey())
    .filter((event) => event.task === taskTitle || (projectName && event.project === projectName))
    .sort((left, right) => {
      const leftKey = `${left.date || ""} ${left.start || ""}`;
      const rightKey = `${right.date || ""} ${right.start || ""}`;
      return leftKey.localeCompare(rightKey);
    })[0] ?? null;

  return {
    projectTargetDate: linkedProject?.target_date ?? null,
    nextEventDate: nextEvent?.date ?? null,
    nextEventTitle: nextEvent?.title ?? null,
  };
}

function getEventLinkedSummary(eventItem) {
  const linkedProject = data.projects.find((project) => project.name === eventItem.project) ?? null;
  const linkedTask = data.tasks.find((task) => task.title === eventItem.task) ?? null;

  return {
    projectTargetDate: linkedProject?.target_date ?? null,
    taskDueDate: linkedTask?.due_date ?? null,
    taskOwner: linkedTask?.owner ?? null,
  };
}

function getDashboardAttentionItems() {
  const todayKey = getTodayKey();
  const items = [];

  data.projects.forEach((project) => {
    if (!project.target_date || !["Active", "Blocked", "On-Hold"].includes(project.status)) return;
    const linked = getProjectLinkedSummary(project.name);
    items.push({
      tableKey: "projects",
      recordId: project.id,
      kind: "Project",
      title: project.name,
      date: project.target_date,
      dateLabel: formatDashboardDate(project.target_date),
      timingLabel: formatAttentionTiming(project.target_date),
      tone: "tone-1",
      status: project.status,
      details: [
        { label: "Venture", value: project.venture || "Unassigned" },
        { label: "Lead", value: project.lead ? formatPersonDisplayLabel(project.lead) : "Unassigned" },
        { label: "Open tasks", value: String(linked.taskCount) },
        { label: "Next task due", value: linked.nextTaskDate ? formatDashboardDate(linked.nextTaskDate) : "None" },
        { label: "Next event", value: linked.nextEventDate ? formatDashboardDate(linked.nextEventDate) : "None" },
      ],
    });
  });

  data.tasks.forEach((task) => {
    if (!task.due_date || ["Done", "Cancelled"].includes(task.status)) return;
    const linked = getTaskLinkedSummary(task.title, task.project);
    items.push({
      tableKey: "tasks",
      recordId: task.id,
      kind: "Task",
      title: task.title,
      date: task.due_date,
      dateLabel: formatDashboardDate(task.due_date),
      timingLabel: formatAttentionTiming(task.due_date),
      tone: "tone-2",
      status: task.status,
      details: [
        { label: "Project", value: task.project || "Unassigned" },
        { label: "Owner", value: task.owner ? formatPersonDisplayLabel(task.owner) : "Unassigned" },
        { label: "Priority", value: task.priority || "Unset" },
        { label: "Project target", value: linked.projectTargetDate ? formatDashboardDate(linked.projectTargetDate) : "None" },
        { label: "Next event", value: linked.nextEventDate ? `${formatDashboardDate(linked.nextEventDate)}${linked.nextEventTitle ? ` · ${linked.nextEventTitle}` : ""}` : "None" },
      ],
    });
  });

  data.events.forEach((event) => {
    if (!event.date || event.date < todayKey) return;
    const linked = getEventLinkedSummary(event);
    items.push({
      tableKey: "events",
      recordId: event.id,
      kind: "Event",
      title: event.title,
      date: event.date,
      dateLabel: formatDashboardDate(event.start || event.date, Boolean(event.start)),
      timingLabel: formatAttentionTiming(event.date),
      tone: "tone-3",
      status: event.type,
      details: [
        { label: "Project", value: event.project || "Unassigned" },
        { label: "Task", value: event.task || "Unassigned" },
        { label: "Task due", value: linked.taskDueDate ? formatDashboardDate(linked.taskDueDate) : "None" },
        { label: "Project target", value: linked.projectTargetDate ? formatDashboardDate(linked.projectTargetDate) : "None" },
        { label: "Task owner", value: linked.taskOwner ? formatPersonDisplayLabel(linked.taskOwner) : "Unassigned" },
      ],
    });
  });

  return items.sort((left, right) => String(left.date).localeCompare(String(right.date)));
}

function renderDashboardAttention() {
  const items = getDashboardAttentionItems();
  const todayLabel = formatDashboardDate(getTodayKey());
  const sections = [
    { key: "events", title: "Events" },
    { key: "tasks", title: "Tasks" },
    { key: "projects", title: "Projects" },
  ];
  return `
    <section class="panel dashboard-attention-panel">
      <div class="panel-head">
        <div>
          <h2>Upcoming</h2>
        </div>
        <div class="attention-panel-meta">
          <div class="attention-today">${escapeHtml(todayLabel)}</div>
          <div class="attention-count">${items.length} items</div>
        </div>
      </div>
      <div id="attention-list" class="attention-sections">
        ${sections.map((section) => {
          const sectionItems = items.filter((item) => item.tableKey === section.key);
          return `
            <section class="attention-group attention-group-${escapeHtml(section.key)}">
              <div class="attention-group-head">
                <h3>${escapeHtml(section.title)}</h3>
                <span>${sectionItems.length}</span>
              </div>
              <div class="attention-list">
                ${sectionItems.length ? sectionItems.map((item) => `
                  <button class="attention-card ${item.tone}" type="button" data-attention-table="${escapeHtml(item.tableKey)}" data-attention-record="${escapeHtml(item.recordId)}">
                    <div class="attention-card-head">
                      <div class="attention-kind">${escapeHtml(item.kind)}</div>
                      <div class="attention-date-block">
                        <div class="attention-date">${escapeHtml(item.dateLabel)}</div>
                        <div class="attention-date-hint">${escapeHtml(item.timingLabel)}</div>
                      </div>
                    </div>
                    <div class="attention-card-title">${escapeHtml(item.title)}</div>
                    <div class="attention-card-status-row">
                      ${item.tableKey === "tasks"
                        ? renderTaskStatusBadge(item.status, "attention")
                        : item.tableKey === "events"
                          ? renderEventTypeBadge(item.status, "attention")
                        : `<span class="attention-status${getStatusClassName(item.status) ? ` attention-status-${getStatusClassName(item.status)}` : ""}">${escapeHtml(item.status)}</span>`}
                    </div>
                    <div class="attention-card-meta">
                      ${item.details.map((detail) => `
                        <div class="attention-detail">
                          <span class="attention-detail-label">${escapeHtml(detail.label)}</span>
                          <strong>${escapeHtml(detail.value)}</strong>
                        </div>
                      `).join("")}
                    </div>
                  </button>
                `).join("") : `<div class="attention-empty">No upcoming ${escapeHtml(section.title.toLowerCase())}.</div>`}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function getGanttTimelineItems() {
  const taskItems = (data.tasks ?? [])
    .map((task) => {
      const linkedProject = getProjectByName(task.project);
      const end = getDateAtDayStart(task.due_date);
      const start = getDateAtDayStart(task.start_date) || getDateAtDayStart(linkedProject?.start_date) || end;
      if (!start || !end) return null;

      return {
        id: task.id,
        tableKey: "tasks",
        label: task.title || task.id,
        subtitle: [task.project, task.owner].filter(Boolean).join(" · "),
        venture: task.venture || linkedProject?.venture || "",
        project: task.project || "",
        status: task.status || "",
        lane: task.project || task.venture || "Tasks",
        start,
        end: end < start ? start : end,
      };
    })
    .filter(Boolean);

  const eventItems = (data.events ?? [])
    .map((event) => {
      const start = getDateAtDayStart(event.start || event.date);
      if (!start) return null;
      const end = getDateAtDayStart(event.end || event.start || event.date) || start;

      return {
        id: event.id,
        tableKey: "events",
        label: event.title || event.id,
        subtitle: [event.project, event.type].filter(Boolean).join(" · "),
        venture: event.venture || "",
        project: event.project || "",
        status: event.type || "",
        lane: event.project || event.venture || "Events",
        start,
        end: end < start ? start : end,
      };
    })
    .filter(Boolean);

  return [...taskItems, ...eventItems]
    .sort((left, right) => {
      const laneCompare = String(left.lane).localeCompare(String(right.lane));
      if (laneCompare !== 0) return laneCompare;
      const startCompare = left.start.getTime() - right.start.getTime();
      if (startCompare !== 0) return startCompare;
      return String(left.label).localeCompare(String(right.label));
    });
}

function renderGanttChart() {
  const ganttScale = getGanttScale();
  const weekStart = getGanttWeekStart();
  const windowStart = ganttScale === "month"
    ? new Date(weekStart.getFullYear(), weekStart.getMonth(), 1)
    : weekStart;
  const visibleDays = ganttScale === "month"
    ? Array.from(
        { length: new Date(windowStart.getFullYear(), windowStart.getMonth() + 1, 0).getDate() },
        (_, index) => addDays(windowStart, index),
      )
    : Array.from({ length: 7 }, (_, index) => addDays(windowStart, index));
  const windowEnd = visibleDays[visibleDays.length - 1];
  const todayIndex = visibleDays.findIndex((day) => getDateOnlyKey(day.toISOString()) === getTodayKey());
  const dateRangeLabel = ganttScale === "month"
    ? windowStart.toLocaleString("en-GB", { month: "long", year: "numeric" })
    : `${visibleDays[0].toLocaleString("en-GB", { month: "short", day: "numeric" })} - ${windowEnd.toLocaleString("en-GB", { month: "short", day: "numeric", year: "numeric" })}`;
  const weekStartKey = getDateOnlyKey(windowStart.toISOString());
  const columnLineStyle = (rowCount) => `--gantt-days: ${visibleDays.length}; --gantt-today-index: ${Math.max(todayIndex, 0)}; --gantt-row-count: ${Math.max(rowCount, 1)}; --gantt-has-today:${todayIndex >= 0 ? 1 : 0};`;
  const projectColors = ["blue", "violet", "green", "amber", "red", "cyan", "pink", "indigo", "orange", "sky"];
  const getVisibleSpan = (start, end) => {
    if (!start || !end || end < windowStart || start > windowEnd) return null;
    const visibleStart = start < windowStart ? windowStart : start;
    const visibleEnd = end > windowEnd ? windowEnd : end;
    const offsetDays = Math.max(getDateDiffInDays(windowStart, visibleStart), 0);
    const spanDays = Math.max(getDateDiffInDays(visibleStart, visibleEnd) + 1, 1);
    return {
      left: (offsetDays / visibleDays.length) * 100,
      width: Math.min((spanDays / visibleDays.length) * 100, 100 - (offsetDays / visibleDays.length) * 100),
    };
  };
  const projectRows = (data.projects ?? [])
    .slice()
    .sort((left, right) => String(left.name || "").localeCompare(String(right.name || ""), undefined, { numeric: true }))
    .map((project, index) => {
      const start = getDateAtDayStart(project.start_date || project.date || project.target_date);
      const end = getDateAtDayStart(project.target_date || project.start_date || project.date);
      return {
        id: project.id,
        tableKey: "projects",
        key: project.name || project.id,
        label: project.name || project.id,
        start,
        end: end && start && end < start ? start : end,
        color: projectColors[index % projectColors.length],
      };
    });
  const baseTaskRows = (data.tasks ?? [])
    .slice()
    .sort((left, right) => String(left.title || "").localeCompare(String(right.title || ""), undefined, { numeric: true }))
    .map((task) => {
      const project = getProjectByName(task.project);
      const end = getDateAtDayStart(task.due_date);
      const durationHours = convertDurationToHours(task.estimate);
      const durationDays = Math.max(Math.ceil(durationHours / 8), 1);
      const estimateStart = end ? addDays(end, -(durationDays - 1)) : null;
      const start = getDateAtDayStart(task.start_date) || estimateStart || getDateAtDayStart(project?.start_date) || end;
      return {
        id: task.id,
        tableKey: "tasks",
        key: task.title || task.id,
        label: `Task · ${task.project || "No project"}${task.owner ? ` · ${task.owner}` : ""}${task.estimate ? ` · ${task.estimate}` : ""}`,
        start,
        end: end && start && end < start ? start : end,
        parentTask: String(task.parent_task || "").trim(),
        depth: 0,
      };
    });
  const taskRowsByKey = new Map(baseTaskRows.map((task) => [task.key, task]));
  const taskChildrenByParent = new Map();
  baseTaskRows.forEach((task) => {
    if (!task.parentTask || !taskRowsByKey.has(task.parentTask)) return;
    const siblings = taskChildrenByParent.get(task.parentTask) || [];
    siblings.push(task);
    taskChildrenByParent.set(task.parentTask, siblings);
  });
  const taskRows = [];
  const appendTaskBranch = (task, depth) => {
    taskRows.push({ ...task, depth });
    const children = taskChildrenByParent.get(task.key) || [];
    children.forEach((child) => appendTaskBranch(child, depth + 1));
  };
  baseTaskRows
    .filter((task) => !task.parentTask || !taskRowsByKey.has(task.parentTask))
    .forEach((task) => appendTaskBranch(task, 0));
  const eventRows = (data.events ?? [])
    .slice()
    .sort((left, right) => String(left.start || left.date || "").localeCompare(String(right.start || right.date || "")))
    .map((event) => {
      const start = getDateAtDayStart(event.start || event.date);
      const end = getDateAtDayStart(event.end || event.start || event.date) || start;
      return {
        id: event.id,
        tableKey: "events",
        key: event.title || event.id,
        label: `Event · ${event.project || event.type || "No project"}${event.type ? ` · ${event.type}` : ""}`,
        start,
        end: end && start && end < start ? start : end,
        color: "orange",
      };
    });
  const renderBar = (item, type) => {
    const visibleSpan = getVisibleSpan(item.start, item.end);
    if (!visibleSpan) return "";
    const left = visibleSpan.left;
    const width = visibleSpan.width;
    const click = item.tableKey ? ` onclick="openGanttRecord('${escapeHtml(item.tableKey)}', '${escapeHtml(item.id)}')"` : "";
    const cardText = `${type === "event" ? "event" : type === "task" ? "task" : "project"}: ${item.key || item.label}`;
    return `
      <button class="gantt-canvas-bar gantt-canvas-bar-${type} ${item.color ? `gantt-color-${item.color}` : ""}" type="button" style="--bar-left:${left}%; --bar-width:${width}%;"${click}>
        <span>${escapeHtml(cardText)}</span>
      </button>
    `;
  };
  const gridRows = [
    ...projectRows.map((item) => renderBar(item, "project")),
    ...taskRows.map((item) => renderBar(item, "task")),
    ...eventRows.map((item) => renderBar(item, "event")),
  ];
  const visibleRowCount = gridRows.filter(Boolean).length;
  const sidebarSection = (title, count, rows, overflowText) => `
    <section class="gantt-workstream-section" style="--gantt-section-row-count:${Math.max(rows.length, 1)};">
      <div class="gantt-workstream-head">
        <strong>${escapeHtml(title)}</strong>
        <em>${count}</em>
        <span class="gantt-section-more">•••</span>
      </div>
      <div class="gantt-workstream-list">
        ${rows.map((row, index) => `
          <div class="gantt-workstream-item${row.depth ? " is-subtask" : ""}" style="${row.depth ? `--gantt-indent:${row.depth};` : ""}">
            <span class="gantt-dot ${row.color ? `gantt-dot-${row.color}` : ""}"></span>
            <strong>${escapeHtml(row.key)}</strong>
            <span>${escapeHtml(row.label)}</span>
          </div>
        `).join("")}
        ${overflowText ? `<button class="gantt-view-all" type="button">${escapeHtml(overflowText)}</button>` : ""}
      </div>
    </section>
  `;

  return `
    <section class="panel gantt-panel">
      <div class="gantt-app-shell">
        <header class="gantt-topbar">
          <div class="gantt-title-row">
            <span class="gantt-menu-icon">≡</span>
            <h2>Gantt Chart</h2>
          </div>
          <div class="gantt-toolbar-left">
            <div class="gantt-arrow-group">
              <button type="button" data-gantt-shift="-1" aria-label="Show previous day">‹</button>
              <button type="button" data-gantt-shift="1" aria-label="Show next day">›</button>
            </div>
            <button class="gantt-today-button" type="button" data-gantt-today="true">Today</button>
            <label class="gantt-date-button">
              <span>${escapeHtml(dateRangeLabel)}</span>
              <span>⌄</span>
              <input class="gantt-date-input" type="date" value="${escapeHtml(weekStartKey)}" data-gantt-date aria-label="Choose Gantt start date" />
            </label>
          </div>
          <div class="gantt-stat-strip">
            <div><strong>${taskRows.length}</strong><span>TASKS</span></div>
            <div><strong>${eventRows.length}</strong><span>EVENTS</span></div>
          </div>
        </header>
        <div class="gantt-board" style="${columnLineStyle(gridRows.length)}">
          <aside class="gantt-workstreams">
            <div class="gantt-workstream-label">WORKSTREAMS</div>
            ${sidebarSection("PROJECTS", projectRows.length, projectRows, "")}
            ${sidebarSection("TASKS", taskRows.length, taskRows.slice(0, 5), taskRows.length > 5 ? `View all ${taskRows.length} tasks` : "")}
            ${sidebarSection("EVENTS", eventRows.length, eventRows.slice(0, 6), eventRows.length > 6 ? `View all ${eventRows.length} events` : "")}
          </aside>
          <main class="gantt-timeline">
            <div class="gantt-timeline-days">
              ${visibleDays.map((day) => {
                const isToday = getDateOnlyKey(day.toISOString()) === getTodayKey();
                const label = ganttScale === "month"
                  ? `${day.getDate()} ${day.toLocaleString("en-GB", { month: "short" })}`
                  : `${day.toLocaleString("en-GB", { weekday: "short" })} ${day.getDate()} ${day.toLocaleString("en-GB", { month: "short" })}`;
                return `<div class="${isToday ? "is-today" : ""}">${escapeHtml(label)}</div>`;
              }).join("")}
            </div>
            <div class="gantt-canvas">
              ${todayIndex >= 0 ? `<div class="gantt-today-line" aria-hidden="true"></div>` : ""}
              ${gridRows.map((bar, index) => `<div class="gantt-canvas-row">${bar}</div>`).join("")}
            </div>
          </main>
        </div>
      </div>
    </section>
  `;
}

function bindDashboardAttentionEvents() {
  el.attentionList?.querySelectorAll("[data-attention-table]").forEach((button) => {
    button.addEventListener("click", () => {
      const { attentionTable, attentionRecord } = button.dataset;
      if (!attentionTable || !attentionRecord) return;
      openRecordDetail(attentionTable, attentionRecord);
    });
  });
}

function getTableIcon(key) {
  const icons = {
    dashboard: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
        <rect x="14" y="3" width="7" height="5" rx="1.5"></rect>
        <rect x="14" y="12" width="7" height="9" rx="1.5"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
      </svg>
    `,
    ventures: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 20V9l8-5 8 5v11"></path>
        <path d="M9 20v-6h6v6"></path>
      </svg>
    `,
    people: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
        <circle cx="9.5" cy="7" r="3"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 4.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    `,
    projects: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 7h7l2 2h9v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path>
      </svg>
    `,
    tasks: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
        <path d="M8 8h8"></path>
        <path d="M8 12h8"></path>
        <path d="m8 16 2 2 4-4"></path>
      </svg>
    `,
    documents: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 3v5h5"></path>
        <path d="M9 13h6"></path>
        <path d="M9 17h6"></path>
      </svg>
    `,
    assets: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
        <path d="m4 7.5 8 4.5 8-4.5"></path>
        <path d="M12 12v9"></path>
      </svg>
    `,
    events: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
        <path d="M16 3v4"></path>
        <path d="M8 3v4"></path>
        <path d="M3 10h18"></path>
      </svg>
    `,
    transactions: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2.5" y="6" width="19" height="12" rx="2"></rect>
        <path d="M2.5 10.5h19"></path>
        <path d="M7 14h3"></path>
      </svg>
    `,
    gantt: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 6h16"></path>
        <path d="M4 12h16"></path>
        <path d="M4 18h16"></path>
        <rect x="5" y="4.5" width="7" height="3" rx="1.5"></rect>
        <rect x="10" y="10.5" width="9" height="3" rx="1.5"></rect>
        <rect x="7" y="16.5" width="5" height="3" rx="1.5"></rect>
      </svg>
    `,
    admin: `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3l7 4v5c0 4.5-2.7 7.9-7 9-4.3-1.1-7-4.5-7-9V7l7-4z"></path>
        <path d="M12 8v8"></path>
        <path d="M8.5 11.5h7"></path>
      </svg>
    `,
  };
  return icons[key] ?? icons.dashboard;
}

function titleCaseKey(key) {
  return key.replaceAll("_", " ");
}

function sortStringsAlpha(values = []) {
  return [...values].sort((left, right) => String(left).localeCompare(String(right)));
}

function sortOptionsAlpha(options = []) {
  return [...options].sort((left, right) => String(left.label ?? left.value ?? "").localeCompare(String(right.label ?? right.value ?? "")));
}

function formatIndianNumber(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (!digits) return "";
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number(digits));
}

function getCurrencyDisplay(currency) {
  const map = {
    INR: "INR",
    USD: "USD",
    EUR: "EUR",
    GBP: "GBP",
    AED: "AED",
    SAR: "SAR",
    SGD: "SGD",
  };
  return map[String(currency || "").toUpperCase()] || String(currency || "");
}

function formatTransactionAmount(value, currency = "INR") {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (/[A-Za-z₹$€£]/.test(raw)) return raw;
  const formatted = formatIndianNumber(raw);
  if (!formatted) return "";
  const currencyLabel = getCurrencyDisplay(currency);
  return currencyLabel ? `${currencyLabel} ${formatted}` : formatted;
}

function getTransactionNumericValue(value) {
  const digits = String(value ?? "").replace(/[^\d.-]/g, "");
  if (!digits) return 0;
  const parsed = Number(digits);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatTransactionTotalByCurrency(rows) {
  const totals = new Map();

  rows.forEach((row) => {
    const currency = getCurrencyDisplay(row.currency || "INR") || "INR";
    const amount = getTransactionNumericValue(row.amount);
    if (!amount) return;
    totals.set(currency, (totals.get(currency) ?? 0) + amount);
  });

  return Array.from(totals.entries())
    .map(([currency, total]) => `${currency} ${formatIndianNumber(total)}`)
    .join(" · ");
}

function getStatusClassName(status) {
  const normalized = String(status || "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return normalized || "";
}

function renderBadge(value, variant = "records", prefix = "status") {
  const badgeClass = getStatusClassName(value);
  if (!badgeClass) return escapeHtml(String(value || "—"));
  return `<span class="${variant}-${prefix}-badge ${variant}-${prefix}-${badgeClass}">${escapeHtml(String(value))}</span>`;
}

function renderTaskStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "status");
}

function renderEventTypeBadge(type, variant = "records") {
  return renderBadge(type, variant, "event");
}

function renderDocumentStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "document-status");
}

function renderDirectionBadge(direction, variant = "records") {
  return renderBadge(direction, variant, "direction");
}

function renderAssetStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "asset-status");
}

function renderVentureStatusBadge(status, variant = "records") {
  return renderBadge(status, variant, "venture-status");
}

function formatCell(tableKey, column, row) {
  const value = row[column];
  if (value == null || value === "") return "—";
  const relation = getRelationConfig(column);
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );
  if (isPeopleRelation) {
    if (Array.isArray(value)) return value.map((item) => formatPersonDisplayLabel(item)).filter(Boolean).join(", ");
    return formatPersonDisplayLabel(value) || "—";
  }
  if (Array.isArray(value)) return formatList(value);
  if (tableKey === "people" && column === "type") return formatList(value);
  if (tableKey === "transactions" && column === "amount") return formatTransactionAmount(value, row.currency);
  return String(value);
}

function renderCellMarkup(tableKey, column, row) {
  const value = formatCell(tableKey, column, row);
  if (tableKey === "documents" && (column === "venture" || column === "project") && value === "—") {
    return "-";
  }
  if ((tableKey === "tasks" || tableKey === "projects") && column === "status" && value !== "—") {
    return renderTaskStatusBadge(value, "records");
  }
  if (tableKey === "documents" && column === "status" && value !== "—") {
    return renderDocumentStatusBadge(value, "records");
  }
  if (tableKey === "transactions" && column === "direction" && value !== "—") {
    return renderDirectionBadge(value, "records");
  }
  if (tableKey === "assets" && column === "status" && value !== "—") {
    return renderAssetStatusBadge(value, "records");
  }
  if (tableKey === "ventures" && column === "status" && value !== "—") {
    return renderVentureStatusBadge(value, "records");
  }
  if (tableKey === "events" && column === "type" && value !== "—") {
    return renderEventTypeBadge(value, "records");
  }
  return escapeHtml(value);
}

function renderSerialNumber(value) {
  return `<span class="record-serial">${escapeHtml(String(value))}</span>`;
}

function getDocumentVisitUrl(record) {
  const raw = String(record?.file_ref ?? "").trim();
  if (!raw) return "";
  try {
    return new URL(raw).toString();
  } catch {
    try {
      return new URL(`https://${raw}`).toString();
    } catch {
      return "";
    }
  }
}

function renderRecordsBody(table, rows) {
  return rows.map((row, index) => `
    <tr data-open-detail="${escapeHtml(table.key)}" data-record-id="${escapeHtml(row.id)}">
      <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
      ${table.listColumns.map((column) => `<td>${renderCellMarkup(table.key, column, row)}</td>`).join("")}
      <td class="records-actions-cell">
        ${table.key === "documents"
          ? `<button class="record-action-button" type="button" data-record-action="visit" data-record-id="${escapeHtml(row.id)}"${getDocumentVisitUrl(row) ? "" : " disabled"}>Visit</button>`
          : ""}
        <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
        <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="${table.listColumns.length + 2}">No records</td></tr>`;
}

function getVentureTone(value) {
  if (!value) return "tone-1";
  const tones = ["tone-1", "tone-2", "tone-3", "tone-4", "tone-5"];
  let sum = 0;
  for (const char of String(value)) sum += char.charCodeAt(0);
  return tones[sum % tones.length];
}

function getInitials(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "NA";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

function getDetailIconTone(tableKey, record) {
  if (tableKey !== "ventures") return "";
  return getVentureTone(record?.name || "");
}

function sortPeopleByHierarchy(rows) {
  return rows.slice().sort((left, right) => {
    const leftRank = peopleTypeRank.get(String(left?.type ?? "").trim()) ?? Number.MAX_SAFE_INTEGER;
    const rightRank = peopleTypeRank.get(String(right?.type ?? "").trim()) ?? Number.MAX_SAFE_INTEGER;
    if (leftRank !== rightRank) return leftRank - rightRank;

    return String(left?.name ?? "").localeCompare(String(right?.name ?? ""));
  });
}

function renderPersonStatus(status) {
  const value = String(status || "No status");
  const normalized = getStatusClassName(value);
  return `<span class="person-card-status person-card-status-${normalized}">${escapeHtml(value)}</span>`;
}

function renderPeopleRecords(rows) {
  if (!rows.length) return `<div class="people-empty">No records</div>`;

  const groups = new Map();
  rows.forEach((row) => {
    const venture = row.venture || "Unassigned";
    if (!groups.has(venture)) groups.set(venture, []);
    groups.get(venture).push(row);
  });

  return Array.from(groups.entries()).map(([venture, people]) => `
    <section class="people-group ${getVentureTone(venture)}">
      <div class="people-group-head">
        <h3><span class="venture-dot" aria-hidden="true"></span>${escapeHtml(venture)}</h3>
        <span>${people.length}</span>
      </div>
      <div class="people-group-list">
        ${sortPeopleByHierarchy(people).map((row, index) => `
          <article class="person-card ${getVentureTone(venture)}" data-open-detail="people" data-record-id="${escapeHtml(row.id)}">
            <div class="person-card-main">
              <div class="person-card-leading">
                ${renderSerialNumber(index + 1)}
                <span class="person-card-avatar" aria-hidden="true">${escapeHtml(getInitials(row.name || "Unnamed"))}</span>
              </div>
              <strong class="person-card-name">${escapeHtml(row.name || "Unnamed")}</strong>
              <span class="person-card-type">${escapeHtml(formatCell("people", "type", row))}</span>
              ${renderPersonStatus(row.status || "No status")}
            </div>
            <div class="person-card-actions">
              <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
              <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function buildTaskHierarchy(rows) {
  const rowByTitle = new Map();
  rows.forEach((row) => {
    const title = String(row.title || "").trim();
    if (title && !rowByTitle.has(title)) rowByTitle.set(title, row);
  });

  const childrenByParentId = new Map();
  const rootRows = [];

  rows.forEach((row) => {
    const parentTitle = String(row.parent_task || "").trim();
    const parentRow = parentTitle ? rowByTitle.get(parentTitle) ?? null : null;
    if (parentRow && parentRow.id !== row.id) {
      if (!childrenByParentId.has(parentRow.id)) childrenByParentId.set(parentRow.id, []);
      childrenByParentId.get(parentRow.id).push(row);
      return;
    }
    rootRows.push(row);
  });

  return { rootRows, childrenByParentId };
}

function renderTaskTitleCell(row, serial, children = [], isChild = false) {
  const hasChildren = children.length > 0;
  const expanded = Boolean(state.taskExpanded[row.id]);
  const toggle = hasChildren
    ? `
      <button class="task-expand-button" type="button" data-task-expand="${escapeHtml(row.id)}" aria-label="${expanded ? "Collapse subtasks" : "Expand subtasks"}" aria-expanded="${expanded}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="${expanded ? "m6 15 6-6 6 6" : "m9 6 6 6-6 6"}"></path>
        </svg>
      </button>
    `
    : `<span class="task-expand-spacer" aria-hidden="true"></span>`;

  return `
    <div class="task-title-cell ${isChild ? "is-child" : ""}">
      ${toggle}
      <div class="task-title-copy">
        ${isChild ? `<span class="task-inline-serial">${escapeHtml(String(serial))}</span>` : ""}
        <strong>${escapeHtml(row.title || "Untitled task")}</strong>
        ${hasChildren ? `<span class="task-inline-count">${children.length} subtask${children.length === 1 ? "" : "s"}</span>` : ""}
      </div>
    </div>
  `;
}

function renderTaskRows(rows) {
  if (!rows.length) return `<tr><td colspan="7">No records</td></tr>`;
  const { rootRows, childrenByParentId } = buildTaskHierarchy(rows);

  return rootRows.map((row, index) => {
    const children = childrenByParentId.get(row.id) ?? [];
    const expanded = Boolean(state.taskExpanded[row.id]);
    const parentRow = `
      <tr data-open-detail="tasks" data-record-id="${escapeHtml(row.id)}" class="task-parent-row">
        <td class="records-serial-cell">${renderSerialNumber(index + 1)}</td>
        <td>${renderTaskTitleCell(row, index + 1, children, false)}</td>
        <td>${renderCellMarkup("tasks", "status", row)}</td>
        <td>${renderCellMarkup("tasks", "owner", row)}</td>
        <td>${renderCellMarkup("tasks", "priority", row)}</td>
        <td>${renderCellMarkup("tasks", "due_date", row)}</td>
        <td class="records-actions-cell">
          <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(row.id)}">Edit</button>
          <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(row.id)}">Delete</button>
        </td>
      </tr>
    `;

    const childRows = expanded
      ? children.map((child, childIndex) => `
        <tr data-open-detail="tasks" data-record-id="${escapeHtml(child.id)}" class="task-child-row">
          <td class="records-serial-cell"></td>
          <td>${renderTaskTitleCell(child, `${index + 1}.${childIndex + 1}`, [], true)}</td>
          <td>${renderCellMarkup("tasks", "status", child)}</td>
          <td>${renderCellMarkup("tasks", "owner", child)}</td>
          <td>${renderCellMarkup("tasks", "priority", child)}</td>
          <td>${renderCellMarkup("tasks", "due_date", child)}</td>
          <td class="records-actions-cell">
            <button class="record-action-button" type="button" data-record-action="edit" data-record-id="${escapeHtml(child.id)}">Edit</button>
            <button class="record-action-button" type="button" data-record-action="delete" data-record-id="${escapeHtml(child.id)}">Delete</button>
          </td>
        </tr>
      `).join("")
      : "";

    return `${parentRow}${childRows}`;
  }).join("");
}

function bindTaskExpandActions() {
  el.heroPanel.querySelectorAll("[data-task-expand]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const { taskExpand } = button.dataset;
      if (!taskExpand) return;
      state.taskExpanded[taskExpand] = !state.taskExpanded[taskExpand];
      updateRecordsTable(getTableByKey("tasks"));
    });
  });
}

function updateRecordsTable(table) {
  const rows = getFilteredAndSortedRows(table);
  el.recordsCount.textContent = `${rows.length} records`;
  if (table.key === "people") {
    el.recordsContent.innerHTML = renderPeopleRecords(rows);
  } else if (table.key === "tasks") {
    el.recordsTableBody.innerHTML = renderTaskRows(rows);
    bindTaskExpandActions();
  } else {
    el.recordsTableBody.innerHTML = renderRecordsBody(table, rows);
  }
  if (el.recordsTotalFooter) {
    if (table.key === "transactions") {
      el.recordsTotalFooter.innerHTML = `
        <span>Visible amount total</span>
        <strong>${escapeHtml(formatTransactionTotalByCurrency(rows) || "INR 0")}</strong>
      `;
      el.recordsTotalFooter.hidden = false;
    } else {
      el.recordsTotalFooter.hidden = true;
    }
  }
  bindRecordRowActions(table);
  bindRecordOpenActions(table);
}

function renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions) {
  const showVentureFilter = ventureOptions.length > 0;
  const showProjectFilter = projectOptions.length > 0;
  const documentTypeOptions = table.key === "documents" ? getFilterOptions("documents", "type") : [];
  const documentStatusOptions = table.key === "documents" ? getFilterOptions("documents", "status") : [];
  const searchPlaceholder = `Search ${escapeHtml(table.title.toLowerCase())}...`;

  return `
    <div class="records-toolbar">
      <div class="records-toolbar-title">
        <h2>${escapeHtml(table.title)}</h2>
        <p id="records-count">${rows.length} records</p>
      </div>
      <div class="records-toolbar-search">
        <input id="records-search" class="records-search" type="search" placeholder="${searchPlaceholder}" value="${escapeHtml(state.search)}" />
      </div>
      <div class="records-toolbar-actions">
        <div class="records-toolbar-options">
          ${showVentureFilter ? `
            <label class="records-filter">
              <select id="records-venture-filter">
                <option value="all" ${filters.venture === "all" ? "selected" : ""}>All ventures</option>
                ${ventureOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.venture === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${showProjectFilter ? `
            <label class="records-filter">
              <select id="records-project-filter">
                <option value="all" ${filters.project === "all" ? "selected" : ""}>All projects</option>
                ${projectOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.project === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          ${table.key === "documents" ? `
            <label class="records-filter">
              <select id="records-type-filter">
                <option value="all" ${filters.type === "all" ? "selected" : ""}>All types</option>
                ${documentTypeOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.type === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
            <label class="records-filter">
              <select id="records-status-filter">
                <option value="all" ${filters.status === "all" ? "selected" : ""}>All statuses</option>
                ${documentStatusOptions.map((option) => `<option value="${escapeHtml(option)}" ${filters.status === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>
          ` : ""}
          <label class="records-filter">
            <select id="records-order-filter">
              <option value="newest" ${filters.order === "newest" ? "selected" : ""}>Newest first</option>
              <option value="oldest" ${filters.order === "oldest" ? "selected" : ""}>Oldest first</option>
            </select>
          </label>
        </div>
        <button id="new-record-button" class="new-record-button" type="button">+</button>
      </div>
    </div>
  `;
}

function renderRecordsTable(table) {
  const rows = getFilteredAndSortedRows(table);
  const filters = getRecordFilterState(table.key);
  const ventureOptions = getFilterOptions(table.key, "venture");
  const projectOptions = getFilterOptions(table.key, "project");
  const toolbar = renderRecordsToolbar(table, rows, filters, ventureOptions, projectOptions);

  if (table.key === "people") {
    return `
      ${toolbar}
      <div id="records-content" class="people-records">
        ${renderPeopleRecords(rows)}
      </div>
    `;
  }

  const headers = table.key === "tasks"
    ? `<th class="records-serial-head">S. No.</th><th>Title</th><th>Status</th><th>Owner</th><th>Priority</th><th>Due date</th><th>Actions</th>`
    : `<th class="records-serial-head">S. No.</th>${table.listColumns.map((column) => `<th>${escapeHtml(titleCaseKey(column))}</th>`).join("")}<th>Actions</th>`;

  const body = table.key === "tasks" ? renderTaskRows(rows) : renderRecordsBody(table, rows);
  const tableWrapClass = table.key === "transactions"
    ? "records-table-wrap records-table-wrap-fixed-total"
    : "records-table-wrap";

  return `
    ${toolbar}
    <div class="${tableWrapClass}">
      <table class="records-table">
        <thead>
          <tr>${headers}</tr>
        </thead>
        <tbody id="records-table-body">
          ${body}
        </tbody>
      </table>
      <div id="records-total-footer" class="records-total-footer" ${table.key === "transactions" ? "" : "hidden"}>
        ${table.key === "transactions" ? `
          <span>Visible amount total</span>
          <strong>${escapeHtml(formatTransactionTotalByCurrency(rows) || "INR 0")}</strong>
        ` : ""}
      </div>
    </div>
  `;
}

function bindRecordRowActions(table) {
  el.heroPanel.querySelectorAll("[data-record-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const { recordAction, recordId } = button.dataset;
      if (recordAction === "visit") {
        const record = data[table.key]?.find((item) => item.id === recordId) ?? null;
        const visitUrl = getDocumentVisitUrl(record);
        if (visitUrl) window.open(visitUrl, "_blank", "noopener,noreferrer");
      }
      if (recordAction === "edit") {
        openForm(table.key, recordId);
      }
      if (recordAction === "delete") {
        deleteRecord(table.key, recordId);
      }
    });
  });
}

function snapshotCurrentView() {
  return {
    activeNav: state.activeNav,
    activeTable: state.activeTable,
    detailTableKey: state.detailTableKey,
    detailRecordId: state.detailRecordId,
    detailTreeOpen: state.detailTreeOpen,
  };
}

function restoreView(view = null) {
  const targetView = view ?? {
    activeNav: "dashboard",
    activeTable: state.activeTable,
    detailTableKey: null,
    detailRecordId: null,
    detailTreeOpen: false,
  };

  state.activeNav = targetView.activeNav;
  state.activeTable = targetView.activeTable;
  state.detailTableKey = targetView.detailTableKey;
  state.detailRecordId = targetView.detailRecordId;
  state.detailTreeOpen = targetView.detailTreeOpen;
  renderSidebarNav();
  renderHeroPanel();
}

function goBackFromDetail() {
  const previousView = state.detailHistory.pop() ?? null;
  restoreView(previousView);
}

function clearDetailHistory() {
  state.detailHistory = [];
}

function openRecordDetail(tableKey, recordId, options = {}) {
  if (!options.skipHistory) {
    state.detailHistory.push(snapshotCurrentView());
  }
  if (!options.preserveNav) {
    state.activeNav = tableKey;
  }
  state.activeTable = tableKey;
  state.detailTableKey = tableKey;
  state.detailRecordId = recordId;
  state.detailTreeOpen = false;
  renderSidebarNav();
  renderHeroPanel();
}

function bindRecordOpenActions(table) {
  el.heroPanel.querySelectorAll("[data-open-detail]").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("button")) return;
      const { openDetail, recordId } = item.dataset;
      openRecordDetail(openDetail || table.key, recordId);
    });
  });
}

function getActiveDetailRecord() {
  if (!state.detailTableKey || !state.detailRecordId) return null;
  const table = getTableByKey(state.detailTableKey);
  if (!table) return null;
  const record = data[table.key].find((item) => item.id === state.detailRecordId) ?? null;
  return record ? { table, record } : null;
}

function renderHeroPanel() {
  const detail = getActiveDetailRecord();
  el.heroPanel.classList.toggle("hero-panel-gantt", state.activeNav === "gantt" && !detail);
  el.heroPanel.classList.toggle("hero-panel-sangeetha", state.activeNav === "dashboard" && !detail);
  if (detail && (detail.table.key === state.activeNav || state.activeNav === "gantt")) {
    el.heroPanel.innerHTML = renderRecordDetail(detail.table, detail.record);
    el.heroPanel.querySelectorAll("[data-detail-action]").forEach((button) => {
      button.addEventListener("click", async () => {
        const action = button.dataset.detailAction;
        if (action === "back") {
          goBackFromDetail();
          return;
        }
        if (action === "edit") openForm(detail.table.key, detail.record.id);
        if (action === "delete") {
          const deleted = await deleteRecord(detail.table.key, detail.record.id);
          if (deleted) {
            goBackFromDetail();
          }
        }
        if (action === "tree") {
          state.detailTreeOpen = !state.detailTreeOpen;
          renderHeroPanel();
        }
      });
    });
    el.heroPanel.querySelectorAll("[data-tree-open]").forEach((button) => {
      button.addEventListener("click", () => {
        const { treeOpen, treeRecord } = button.dataset;
        if (!treeRecord) return;
        openRecordDetail(treeOpen, treeRecord);
      });
    });
    return;
  }

  if (state.activeNav === "dashboard") {
    el.heroPanel.innerHTML = renderSangeethaDashboard();
    bindSangeethaDashboardEvents();
    return;
  }

  if (state.activeNav === "admin") {
    el.heroPanel.innerHTML = `
      <section class="panel admin-panel">
        <div class="panel-head">
          <div>
            <h2>Admin</h2>
            <p>Create users, passwords, and access control.</p>
          </div>
        </div>
        ${renderAdminWorkspace()}
      </section>
    `;
    bindAdminWorkspaceEvents();
    return;
  }

  if (state.activeNav === "gantt") {
    el.heroPanel.innerHTML = renderGanttChart();
    return;
  }

  const table = tables.find((item) => item.key === state.activeNav) ?? tables[0];
  el.heroPanel.innerHTML = renderRecordsTable(table);
  el.recordsSearch = document.getElementById("records-search");
  el.recordsCount = document.getElementById("records-count");
  el.recordsContent = document.getElementById("records-content");
  el.recordsTableBody = document.getElementById("records-table-body");
  el.recordsTotalFooter = document.getElementById("records-total-footer");
  el.newRecordButton = document.getElementById("new-record-button");
  el.recordsSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    updateRecordsTable(table);
  });
  el.recordsVentureFilter = document.getElementById("records-venture-filter");
  el.recordsProjectFilter = document.getElementById("records-project-filter");
  el.recordsTypeFilter = document.getElementById("records-type-filter");
  el.recordsStatusFilter = document.getElementById("records-status-filter");
  el.recordsOrderFilter = document.getElementById("records-order-filter");
  if (el.recordsVentureFilter) {
    el.recordsVentureFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).venture = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsProjectFilter) {
    el.recordsProjectFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).project = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsTypeFilter) {
    el.recordsTypeFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).type = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsStatusFilter) {
    el.recordsStatusFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).status = event.target.value;
      updateRecordsTable(table);
    });
  }
  if (el.recordsOrderFilter) {
    el.recordsOrderFilter.addEventListener("change", (event) => {
      getRecordFilterState(table.key).order = event.target.value;
      updateRecordsTable(table);
    });
  }
  el.newRecordButton.addEventListener("click", () => openForm(table.key));
  if (table.key === "tasks") {
    bindTaskExpandActions();
  }
  bindRecordRowActions(table);
  bindRecordOpenActions(table);
}

function renderSelectors() {
  if (!el.projectSelect || !el.taskSelect) return;

  el.projectSelect.innerHTML = data.projects
    .map((project) => `<option value="${project.id}" ${state.projectId === project.id ? "selected" : ""}>${project.name}</option>`)
    .join("");

  el.taskSelect.innerHTML = data.tasks
    .map((task) => `<option value="${task.id}" ${state.taskId === task.id ? "selected" : ""}>${task.title}</option>`)
    .join("");
}

const sangeethaStages = [
  { key: "lead", label: "Lead" },
  { key: "under_review", label: "Under Review" },
  { key: "shortlisted", label: "Shortlisted" },
  { key: "approved", label: "Approved" },
  { key: "fitout", label: "Fit-out / Setup" },
  { key: "live", label: "Live Store" },
  { key: "rejected", label: "Rejected", terminal: true },
  { key: "closed", label: "Closed / Exited", terminal: true },
];

let sangeethaProperties = [
  {
    id: "sg-1",
    name: "Indiranagar 100ft Road",
    city: "Bengaluru",
    locality: "Indiranagar",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/indiranagar-night.jpg",
    lat: 12.971,
    lon: 77.64,
    stage: "live",
    floor: "Ground",
    frontage: 24,
    size: 1200,
    rent: 185000,
    rsf: 154,
    deposit: 1850000,
    source: "Broker",
    daysInStage: 42,
    lease: { start: "2023-04-01", expiry: "2026-09-30", lock: 36, notice: 90, rent: 185000, rsf: 154, escDate: "2027-04-01", escPct: 8, deposit: 1850000, renewal: "due" },
    licenses: [
      { type: "Trade License", authority: "BBMP", issue: "2024-04-01", expiry: "2026-08-15", status: "expiring" },
      { type: "Fire NOC", authority: "Karnataka Fire Dept", issue: "2024-01-10", expiry: "2026-07-20", status: "expiring" },
      { type: "Shops & Estab.", authority: "Labour Dept", issue: "2023-04-01", expiry: "2026-04-01", status: "expired" },
    ],
    tickets: [{ cat: "Electrical", desc: "Signage light flickering", raised: "2026-06-20", status: "open", by: "Store employee" }],
    inventory: [
      { item: "Split AC 1.5T", qty: 3, cond: "Good", checked: "2026-05-12" },
      { item: "Display Shelving Unit", qty: 8, cond: "Good", checked: "2026-05-12" },
      { item: "CCTV Camera", qty: 6, cond: "Good", checked: "2026-06-01" },
    ],
    contacts: [
      { name: "Mr. Rao", role: "Landlord", phone: "9876543210" },
      { name: "A. Pinto", role: "Broker", phone: "9797979797" },
    ],
    history: [
      { from: "fitout", to: "live", note: "Store opened to public", by: "R. Hegde", at: "2024-04-01" },
      { from: "approved", to: "fitout", note: "Handover from landlord, interiors started", by: "R. Hegde", at: "2024-02-10" },
    ],
    media: { photos: 5, floorplan: true, documents: ["Lease Draft.pdf", "Fire NOC.pdf", "Trade License.pdf"] },
    utilityBills: [
      { name: "Electricity", period: "Jun 2026", amount: 18450, status: "Open" },
      { name: "Water", period: "Jun 2026", amount: 2200, status: "Paid" },
      { name: "DG maintenance", period: "Jun 2026", amount: 6400, status: "Open" },
    ],
  },
  {
    id: "sg-2",
    name: "Jayanagar 4th Block",
    city: "Bengaluru",
    locality: "Jayanagar",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/jayanagar-market.jpg",
    lat: 12.925,
    lon: 77.583,
    stage: "live",
    floor: "Ground",
    frontage: 20,
    size: 1200,
    rent: 142000,
    rsf: 118,
    deposit: 1420000,
    source: "Referral",
    daysInStage: 88,
    lease: { start: "2022-11-01", expiry: "2026-07-15", lock: 24, notice: 60, rent: 142000, rsf: 118, escDate: "2026-11-01", escPct: 7, deposit: 1420000, renewal: "negotiating" },
    licenses: [
      { type: "Trade License", authority: "BBMP", issue: "2024-04-01", expiry: "2026-12-01", status: "valid" },
      { type: "Fire NOC", authority: "Karnataka Fire Dept", issue: "2023-06-01", expiry: "2026-06-01", status: "expired" },
    ],
    tickets: [{ cat: "Plumbing", desc: "Water leakage near electrical panel, back wall", raised: "2026-06-26", status: "open", by: "Store employee" }],
    inventory: [
      { item: "Split AC 1.5T", qty: 2, cond: "Needs service", checked: "2026-06-01" },
      { item: "Display Shelving Unit", qty: 6, cond: "Good", checked: "2026-06-01" },
    ],
    contacts: [
      { name: "S. Nair", role: "Owner", phone: "9898989898" },
      { name: "K. Devraj", role: "Broker", phone: "9787878787" },
    ],
    history: [{ from: "fitout", to: "live", note: "Store opened to public", by: "S. Nair", at: "2023-01-05" }],
    media: { photos: 4, floorplan: true, documents: ["Lease Draft.pdf", "Fire NOC (expired).pdf"] },
    utilityBills: [
      { name: "Electricity", period: "Jun 2026", amount: 13200, status: "Open" },
      { name: "Water", period: "Jun 2026", amount: 1650, status: "Open" },
    ],
  },
  {
    id: "sg-3",
    name: "Saraswathipuram",
    city: "Mysuru",
    locality: "Saraswathipuram",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/mandya-storefront.webp",
    lat: 12.31,
    lon: 76.62,
    stage: "live",
    floor: "Ground",
    frontage: 18,
    size: 800,
    rent: 72000,
    rsf: 90,
    deposit: 720000,
    source: "Broker",
    daysInStage: 30,
    lease: { start: "2024-02-01", expiry: "2027-01-31", lock: 24, notice: 60, rent: 72000, rsf: 90, escDate: "2027-02-01", escPct: 7, deposit: 720000, renewal: "active" },
    licenses: [{ type: "Trade License", authority: "Mysuru City Corp.", issue: "2024-02-01", expiry: "2027-02-01", status: "valid" }],
    tickets: [],
    inventory: [{ item: "Display Shelving Unit", qty: 4, cond: "Good", checked: "2026-04-20" }],
    contacts: [{ name: "P. Achar", role: "Landlord", phone: "9898123456" }],
    history: [{ from: "fitout", to: "live", note: "Store opened to public", by: "P. Achar", at: "2024-03-01" }],
    media: { photos: 3, floorplan: true, documents: ["Trade License.pdf"] },
    utilityBills: [
      { name: "Electricity", period: "Jun 2026", amount: 8700, status: "Open" },
      { name: "Water", period: "Jun 2026", amount: 950, status: "Paid" },
    ],
  },
  {
    id: "sg-4",
    name: "Hampankatta",
    city: "Mangaluru",
    locality: "Hampankatta",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/hampankatta-frontage.jpg",
    lat: 12.87,
    lon: 74.842,
    stage: "approved",
    floor: "Ground",
    frontage: 22,
    size: 1000,
    rent: 88000,
    rsf: 88,
    deposit: 880000,
    source: "Broker",
    daysInStage: 12,
  },
  {
    id: "sg-5",
    name: "Vidyanagar",
    city: "Hubballi",
    locality: "Vidyanagar",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/tumakuru-complex.webp",
    lat: 15.348,
    lon: 75.135,
    stage: "fitout",
    floor: "Ground",
    frontage: 19,
    size: 800,
    rent: 64000,
    rsf: 80,
    deposit: 640000,
    source: "Referral",
    daysInStage: 7,
  },
  {
    id: "sg-6",
    name: "College Road",
    city: "Belagavi",
    locality: "College Road",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/jayanagar-market.jpg",
    lat: 15.862,
    lon: 74.508,
    stage: "lead",
    floor: "Ground",
    frontage: 16,
    size: 800,
    rent: 58000,
    rsf: 72,
    deposit: 580000,
    source: "Scout",
    daysInStage: 4,
  },
  {
    id: "sg-7",
    name: "Mandya Main Road",
    city: "Mandya",
    locality: "Main Road",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/mandya-storefront.webp",
    lat: 12.524,
    lon: 76.897,
    stage: "under_review",
    floor: "Ground",
    frontage: 14,
    size: 700,
    rent: 46000,
    rsf: 65,
    deposit: 460000,
    source: "Walk-in",
    daysInStage: 18,
  },
  {
    id: "sg-8",
    name: "MG Road",
    city: "Tumakuru",
    locality: "MG Road",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/tumakuru-complex.webp",
    lat: 13.341,
    lon: 77.101,
    stage: "live",
    floor: "Ground",
    frontage: 17,
    size: 800,
    rent: 54000,
    rsf: 68,
    deposit: 540000,
    source: "Broker",
    daysInStage: 66,
    lease: { start: "2021-06-01", expiry: "2026-08-05", lock: 24, notice: 60, rent: 54000, rsf: 68, escDate: "2026-12-01", escPct: 6, deposit: 540000, renewal: "due" },
    licenses: [
      { type: "Trade License", authority: "Tumakuru City Corp.", issue: "2024-06-01", expiry: "2026-09-01", status: "valid" },
      { type: "Fire NOC", authority: "Karnataka Fire Dept", issue: "2023-06-01", expiry: "2026-06-15", status: "expired" },
    ],
    tickets: [{ cat: "AC", desc: "Cooling unit underperforming in display area", raised: "2026-06-10", status: "open", by: "Owner" }],
    inventory: [{ item: "Split AC 1.5T", qty: 2, cond: "Needs service", checked: "2026-06-10" }],
    contacts: [{ name: "R. Hegde", role: "Owner", phone: "9845098450" }],
    history: [{ from: "fitout", to: "live", note: "Store opened to public", by: "R. Hegde", at: "2021-07-01" }],
    media: { photos: 2, floorplan: true, documents: ["Fire NOC.pdf"] },
  },
  {
    id: "sg-9",
    name: "PB Road",
    city: "Davanagere",
    locality: "PB Road",
    photoUrl: "https://bnzkqkwxjseksvgccwid.supabase.co/storage/v1/object/public/logos/stores/hampankatta-frontage.jpg",
    lat: 14.465,
    lon: 75.921,
    stage: "rejected",
    floor: "Ground",
    frontage: 15,
    size: 700,
    rent: 50000,
    rsf: 70,
    deposit: 500000,
    source: "Broker",
    daysInStage: 120,
    rejectionReason: "Visibility was weak and landlord would not accept the brand frontage spec.",
    history: [{ from: "under_review", to: "rejected", note: "Rejected after site visit", by: "R. Hegde", at: "2026-06-12" }],
  },
];

const sangeethaDashboardState = {
  view: "map",
  layer: "all",
  pipelineFocus: "all",
  health: false,
  mapFiltersOpen: false,
  stages: new Set(sangeethaStages.map((stage) => stage.key)),
  cities: new Set([...new Set(sangeethaProperties.map((property) => property.city))]),
  sortKey: "name",
  sortDir: 1,
};

const sangeethaPipelineStages = ["lead", "under_review", "shortlisted", "approved", "fitout", "live"];

function sangeethaStageLabel(key) {
  return sangeethaStages.find((stage) => stage.key === key)?.label ?? key;
}

function sangeethaPinAddressLabel(property) {
  const locality = String(property.locality || property.name || "").trim();
  const floor = String(property.floor || "").trim();
  if (locality && floor) return `${locality} · ${floor} floor`;
  return locality || property.name || "";
}

function sangeethaPropertyById(propertyId) {
  return sangeethaProperties.find((property) => property.id === propertyId) ?? null;
}

function sangeethaAllStagesSelected() {
  return sangeethaDashboardState.stages.size === sangeethaStages.length;
}

function sangeethaAllCitiesSelected() {
  return sangeethaDashboardState.cities.size === new Set(sangeethaProperties.map((property) => property.city)).size;
}

function sangeethaAllCityNames() {
  return [...new Set(sangeethaProperties.map((property) => property.city))];
}

function sangeethaStageIndex(stageKey) {
  return sangeethaPipelineStages.indexOf(stageKey);
}

function sangeethaPipelineFocusLabel(key) {
  return {
    all: "All opportunities",
    leads: "Lead capture",
    live: "Live stores",
    rejected: "Rejected",
  }[key] ?? "All opportunities";
}

function sangeethaPropertyMoveNote(previousStage, nextStage) {
  return `Moved from ${sangeethaStageLabel(previousStage)} to ${sangeethaStageLabel(nextStage)}`;
}

function sangeethaRecordPropertyHistory(property, previousStage, nextStage, note, by = "Scout") {
  property.history = Array.isArray(property.history) ? property.history : [];
  property.history.unshift({
    from: previousStage,
    to: nextStage,
    note,
    by,
    at: "2026-06-29",
  });
  property.daysInStage = 0;
}

function sangeethaUpdatePropertyStage(propertyId, nextStage, { reason = "", by = "Scout" } = {}) {
  const property = sangeethaPropertyById(propertyId);
  if (!property || property.stage === nextStage) return false;

  const previousStage = property.stage;
  property.stage = nextStage;

  if (nextStage === "rejected") {
    property.rejectionReason = reason || property.rejectionReason || "Rejected during review";
  }

  if (previousStage === "rejected" && nextStage !== "rejected") {
    property.rejectionReason = "";
  }

  if (nextStage === "live") {
    property.reviewState = "approved";
  }

  sangeethaRecordPropertyHistory(property, previousStage, nextStage, reason || sangeethaPropertyMoveNote(previousStage, nextStage), by);

  if (state.sangeethaPropertyId === propertyId) {
    state.sangeethaPropertyTab = nextStage === "live" ? "management" : "review";
  }

  renderHeroPanel();
  return true;
}

function sangeethaOpenProperty(propertyId, tab = "overview") {
  if (!propertyId) return;
  state.sangeethaPropertyId = propertyId;
  state.sangeethaPropertyTab = tab;
  state.activeNav = "dashboard";
  renderSidebarNav();
  renderHeroPanel();
}

function sangeethaCloseProperty() {
  state.sangeethaPropertyId = null;
  state.sangeethaPropertyTab = "overview";
  renderHeroPanel();
}

function sangeethaMapFromPoint(x, y) {
  const normalizedX = Math.min(Math.max(x, 0), 100);
  const normalizedY = Math.min(Math.max(y, 0), 100);
  return {
    lon: 74 + (normalizedX / 100) * 4.5,
    lat: 18.5 - (normalizedY / 100) * 7,
  };
}

function sangeethaPointFromGeo(lat, lon) {
  return {
    x: (((lon - 74) / 4.5) * 100).toFixed(1),
    y: (((18.5 - lat) / 7) * 100).toFixed(1),
  };
}

function sangeethaPropertyPreview(property) {
  const photoUrl = property.photoUrl || property.photo || property.media?.photoUrl || "";
  const initials = property.name
    ? property.name.split(/\s+/).map((part) => part[0] ?? "").join("").slice(0, 2).toUpperCase()
    : "SM";
  if (photoUrl) {
    return `<img class="sd-property-photo" src="${escapeHtml(photoUrl)}" alt="${escapeHtml(property.name)} photo" />`;
  }
  return `<div class="sd-property-initials">${escapeHtml(initials || "SM")}</div>`;
}

function sangeethaPipelineFocusItems(property) {
  if (sangeethaDashboardState.pipelineFocus === "all") return true;
  if (sangeethaDashboardState.pipelineFocus === "leads") return property.stage === "lead";
  if (sangeethaDashboardState.pipelineFocus === "live") return property.stage === "live";
  if (sangeethaDashboardState.pipelineFocus === "rejected") return property.stage === "rejected";
  return true;
}

function sangeethaDetailTabs() {
  const tabs = [
    { key: "overview", label: "Overview" },
    { key: "review", label: "Review" },
    { key: "management", label: "Management" },
    { key: "media", label: "Media" },
  ];

  return `
    <div class="sd-detail-tabs" role="tablist" aria-label="Property tabs">
      ${tabs.map((tab) => `<button type="button" class="${state.sangeethaPropertyTab === tab.key ? "active" : ""}" data-sangeetha-tab="${tab.key}" role="tab" aria-selected="${state.sangeethaPropertyTab === tab.key ? "true" : "false"}">${escapeHtml(tab.label)}</button>`).join("")}
    </div>
  `;
}

function sangeethaRenderPropertyActions(property) {
  const stageTargets = sangeethaPipelineStages
    .filter((stage) => stage !== property.stage)
    .map((stage) => `<button class="sd-stage-button" type="button" data-stage-target="${escapeHtml(stage)}" data-stage-property="${escapeHtml(property.id)}">${escapeHtml(sangeethaStageLabel(stage))}</button>`)
    .join("");

  return `
    <div class="sd-stage-rail">
      <div class="sd-stage-rail-label">Stage actions</div>
      <div class="sd-stage-rail-buttons">
        ${stageTargets}
        ${property.stage !== "rejected" ? `<button class="sd-stage-button sd-stage-button-warning" type="button" data-stage-target="rejected" data-stage-property="${escapeHtml(property.id)}">Reject with reason</button>` : ""}
      </div>
      <div class="sd-stage-rail-hint">${escapeHtml(sangeethaStageLabel(property.stage))}</div>
    </div>
  `;
}

function sangeethaRenderPropertyOverview(property) {
  const lease = property.lease;
  const compliance = sangeethaComplianceStatus(property);
  const currentStage = sangeethaStageLabel(property.stage);
  const healthLabel = property.stage === "live" ? (sangeethaHealthCritical(property) ? "Amber" : "Healthy") : currentStage;
  const sourceTag = property.source ? `<span class="sd-chip-status">${escapeHtml(property.source)}</span>` : "—";
  return `
    <div class="detail-grid sd-detail-grid">
      <div class="detail-field">
        <div class="detail-field-label">Stage :</div>
        <div class="detail-field-value">${escapeHtml(currentStage)}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">City :</div>
        <div class="detail-field-value">${escapeHtml(property.city)}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Locality :</div>
        <div class="detail-field-value">${escapeHtml(property.locality)}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Source :</div>
        <div class="detail-field-value">${sourceTag}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Rent :</div>
        <div class="detail-field-value">₹${property.rent.toLocaleString("en-IN")} / month</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Rent / sq.ft :</div>
        <div class="detail-field-value">₹${property.rsf}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Size :</div>
        <div class="detail-field-value">${property.size} sq.ft</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Health :</div>
        <div class="detail-field-value">${escapeHtml(healthLabel)}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Lease expiry :</div>
        <div class="detail-field-value">${lease ? escapeHtml(lease.expiry) : "—"}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Compliance :</div>
        <div class="detail-field-value">${compliance ? escapeHtml(compliance) : "—"}</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Frontage :</div>
        <div class="detail-field-value">${escapeHtml(String(property.frontage ?? "—"))} ft</div>
      </div>
      <div class="detail-field">
        <div class="detail-field-label">Pin :</div>
        <div class="detail-field-value">${property.lat != null && property.lon != null ? `${property.lat.toFixed(3)}, ${property.lon.toFixed(3)}` : "—"}</div>
      </div>
    </div>
  `;
}

function sangeethaRenderPropertyReview(property) {
  const events = Array.isArray(property.history) ? property.history : [];
  const rejectionReason = property.rejectionReason || (property.stage === "rejected" ? "Reason logged on rejection." : "");
  return `
    <div class="sd-detail-panel-grid">
      <section class="sd-detail-panel">
        <h3>Decision trail</h3>
        <div class="sd-trail">
          ${events.length ? events.map((entry) => `
            <article class="sd-trail-item">
              <div class="sd-trail-top">
                <strong>${escapeHtml(sangeethaStageLabel(entry.from))} → ${escapeHtml(sangeethaStageLabel(entry.to))}</strong>
                <span>${escapeHtml(entry.at || "")}</span>
              </div>
              <div class="sd-trail-note">${escapeHtml(entry.note || "")}</div>
              <div class="sd-trail-meta">${escapeHtml(entry.by || "Scout")}</div>
            </article>
          `).join("") : '<div class="sd-empty">No stage changes yet.</div>'}
        </div>
      </section>
      <section class="sd-detail-panel">
        <h3>Review summary</h3>
        <div class="sd-mini-grid">
          <div><span>Lead source</span><strong>${escapeHtml(property.source || "Scout")}</strong></div>
          <div><span>Days in stage</span><strong>${escapeHtml(String(property.daysInStage ?? 0))}</strong></div>
          <div><span>Frontage</span><strong>${escapeHtml(String(property.frontage ?? "—"))} ft</strong></div>
          <div><span>Floor</span><strong>${escapeHtml(property.floor || "—")}</strong></div>
        </div>
        <div class="sd-review-reason ${rejectionReason ? "active" : ""}">
          <span>Rejected reason</span>
          <strong>${escapeHtml(rejectionReason || "None recorded yet")}</strong>
        </div>
      </section>
    </div>
  `;
}

function sangeethaRenderPropertyManagement(property) {
  const lease = property.lease;
  const licenses = Array.isArray(property.licenses) ? property.licenses : [];
  const tickets = Array.isArray(property.tickets) ? property.tickets : [];
  const utilityBills = Array.isArray(property.utilityBills) ? property.utilityBills : [];
  return `
    <div class="sd-detail-panel-grid">
      <section class="sd-detail-panel">
        <h3>Lease</h3>
        ${lease ? `
          <div class="sd-management-list">
            <div><span>Expiry</span><strong>${escapeHtml(lease.expiry)}</strong></div>
            <div><span>Rent</span><strong>₹${lease.rent.toLocaleString("en-IN")}</strong></div>
            <div><span>Escalation</span><strong>${escapeHtml(String(lease.escPct ?? ""))}% ${escapeHtml(lease.escDate ? `on ${lease.escDate}` : "")}</strong></div>
            <div><span>Renewal</span><strong>${escapeHtml(lease.renewal || "—")}</strong></div>
          </div>
        ` : '<div class="sd-empty">No lease linked yet.</div>'}
      </section>
      <section class="sd-detail-panel">
        <h3>Compliance</h3>
        <div class="sd-management-stack">
          ${licenses.length ? licenses.map((license) => `
            <div class="sd-management-card">
              <div class="sd-management-card-top">
                <strong>${escapeHtml(license.type)}</strong>
                <span class="sd-chip-status ${license.status === "expired" ? "bad" : license.status === "expiring" ? "due" : "ok"}">${escapeHtml(license.status)}</span>
              </div>
              <div class="sd-management-card-meta">${escapeHtml(license.authority)} · expires ${escapeHtml(license.expiry)}</div>
            </div>
          `).join("") : '<div class="sd-empty">No compliance records logged.</div>'}
        </div>
      </section>
      <section class="sd-detail-panel">
        <h3>Open tickets</h3>
        <div class="sd-management-stack">
          ${tickets.length ? tickets.map((ticket) => `
            <div class="sd-management-card">
              <div class="sd-management-card-top">
                <strong>${escapeHtml(ticket.cat)}</strong>
                <span class="sd-chip-status due">${escapeHtml(ticket.status)}</span>
              </div>
              <div class="sd-management-card-meta">${escapeHtml(ticket.desc)} · raised ${escapeHtml(ticket.raised)}</div>
            </div>
          `).join("") : '<div class="sd-empty">No open maintenance tickets.</div>'}
        </div>
      </section>
      <section class="sd-detail-panel">
        <h3>Utility bills</h3>
        <div class="sd-management-stack">
          ${utilityBills.length ? utilityBills.map((bill) => `
            <div class="sd-management-card">
              <div class="sd-management-card-top">
                <strong>${escapeHtml(bill.name)}</strong>
                <span class="sd-chip-status ${String(bill.status).toLowerCase() === "paid" ? "ok" : "due"}">${escapeHtml(bill.status)}</span>
              </div>
              <div class="sd-management-card-meta">${escapeHtml(bill.period)} · ₹${Number(bill.amount).toLocaleString("en-IN")}</div>
            </div>
          `).join("") : '<div class="sd-empty">No utility bills attached yet.</div>'}
        </div>
      </section>
    </div>
  `;
}

function sangeethaRenderPropertyMedia(property) {
  const media = property.media ?? {};
  const docs = Array.isArray(media.documents) ? media.documents : [];
  return `
    <div class="sd-detail-panel-grid">
      <section class="sd-detail-panel">
        <h3>Photos</h3>
        <div class="sd-media-preview">
          ${sangeethaPropertyPreview(property)}
        </div>
        <div class="sd-mini-grid">
          <div><span>Photo count</span><strong>${escapeHtml(String(media.photos ?? 0))}</strong></div>
          <div><span>Floorplan</span><strong>${media.floorplan ? "Yes" : "No"}</strong></div>
        </div>
      </section>
      <section class="sd-detail-panel">
        <h3>Files</h3>
        <div class="sd-management-stack">
          ${docs.length ? docs.map((document) => `
            <div class="sd-management-card">
              <strong>${escapeHtml(document)}</strong>
              <div class="sd-management-card-meta">Available in the field folder</div>
            </div>
          `).join("") : '<div class="sd-empty">No documents uploaded.</div>'}
        </div>
      </section>
    </div>
  `;
}

function renderSangeethaLeadCaptureForm() {
  return `
    <div class="sd-capture-grid">
      <label class="sd-capture-field">
        <span>Property name</span>
        <input name="sangeetha_name" type="text" placeholder="College Road" required />
      </label>
      <label class="sd-capture-field">
        <span>City</span>
        <input name="sangeetha_city" type="text" placeholder="Belagavi" required />
      </label>
      <label class="sd-capture-field">
        <span>Locality</span>
        <input name="sangeetha_locality" type="text" placeholder="Main road / market area" required />
      </label>
      <label class="sd-capture-field">
        <span>Source</span>
        <select name="sangeetha_source">
          <option>Scout</option>
          <option>Broker</option>
          <option>Walk-in</option>
          <option>Referral</option>
        </select>
      </label>
      <label class="sd-capture-field">
        <span>Rent / month</span>
        <input name="sangeetha_rent" type="number" inputmode="numeric" min="0" placeholder="58000" required />
      </label>
      <label class="sd-capture-field">
        <span>Rent / sq.ft</span>
        <input name="sangeetha_rsf" type="number" inputmode="numeric" min="0" placeholder="72" required />
      </label>
      <label class="sd-capture-field">
        <span>Size (sq.ft)</span>
        <input name="sangeetha_size" type="number" inputmode="numeric" min="0" placeholder="800" required />
      </label>
      <label class="sd-capture-field">
        <span>Frontage (ft)</span>
        <input name="sangeetha_frontage" type="number" inputmode="numeric" min="0" placeholder="16" required />
      </label>
    </div>
    <div class="sd-capture-location-block">
      <div class="sd-capture-location-head">
        <strong>Location</strong>
        <span>Use the device location for this lead.</span>
      </div>
      <button class="sd-location-button" type="button" data-capture-location>Use current location</button>
      <div class="sd-location-status" data-location-status>Location not captured yet.</div>
      <input name="sangeetha_lat" type="hidden" value="" />
      <input name="sangeetha_lon" type="hidden" value="" />
    </div>
    <label class="sd-capture-field sd-capture-photo">
      <span>Photo</span>
      <input name="sangeetha_photo" type="file" accept="image/*" />
      <div class="sd-photo-preview" data-photo-preview>Drop a photo from the field.</div>
    </label>
  `;
}

function openSangeethaLeadCapture() {
  state.modalEntity = "sangeetha-lead";
  state.modalMode = "create";
  state.editingRecordId = null;
  state.editingUserId = null;
  el.modalTitle.textContent = "Capture lead";
  el.modalSubtitle.textContent = "Pin drop and photo";
  el.form.innerHTML = renderSangeethaLeadCaptureForm();
  el.saveButton.textContent = "Create lead";
  el.modal.classList.add("open");
  syncBodyModalState();
  bindSangeethaCaptureForm();
}

function bindSangeethaCaptureForm() {
  const photoInput = el.formElement.querySelector('input[name="sangeetha_photo"]');
  const photoPreview = el.formElement.querySelector("[data-photo-preview]");
  const locationButton = el.formElement.querySelector("[data-capture-location]");
  const locationStatus = el.formElement.querySelector("[data-location-status]");
  const latInput = el.formElement.querySelector('input[name="sangeetha_lat"]');
  const lonInput = el.formElement.querySelector('input[name="sangeetha_lon"]');

  locationButton?.addEventListener("click", () => {
    if (!(latInput instanceof HTMLInputElement) || !(lonInput instanceof HTMLInputElement) || !(locationStatus instanceof HTMLElement)) return;
    if (!navigator.geolocation) {
      locationStatus.textContent = "Location access is not available on this device.";
      return;
    }

    locationStatus.textContent = "Getting current location...";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude).toFixed(6);
        const lon = Number(position.coords.longitude).toFixed(6);
        latInput.value = lat;
        lonInput.value = lon;
        locationStatus.textContent = `Using current location: ${lat}, ${lon}`;
      },
      () => {
        locationStatus.textContent = "Could not fetch current location. You can still save without it.";
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  });

  photoInput?.addEventListener("change", () => {
    const file = photoInput.files?.[0];
    if (!file || !(photoPreview instanceof HTMLElement)) {
      if (photoPreview instanceof HTMLElement) photoPreview.textContent = "Drop a photo from the field.";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const url = String(reader.result || "");
      photoPreview.innerHTML = `<img src="${escapeHtml(url)}" alt="Lead photo preview" />`;
    };
    reader.readAsDataURL(file);
  });

}

function saveSangeethaLeadCapture() {
  const formData = new FormData(el.formElement);
  const name = String(formData.get("sangeetha_name") ?? "").trim();
  const city = String(formData.get("sangeetha_city") ?? "").trim();
  const locality = String(formData.get("sangeetha_locality") ?? "").trim();
  const source = String(formData.get("sangeetha_source") ?? "Scout").trim() || "Scout";
  const rent = Number(formData.get("sangeetha_rent") ?? 0);
  const rsf = Number(formData.get("sangeetha_rsf") ?? 0);
  const size = Number(formData.get("sangeetha_size") ?? 0);
  const frontage = Number(formData.get("sangeetha_frontage") ?? 0);
  const latField = String(formData.get("sangeetha_lat") ?? "").trim();
  const lonField = String(formData.get("sangeetha_lon") ?? "").trim();
  const file = el.formElement.querySelector('input[name="sangeetha_photo"]')?.files?.[0] ?? null;
  const photoUrl = file ? URL.createObjectURL(file) : "";
  const fallbackGeo = sangeethaMapFromPoint(50, 50);
  const lat = latField ? Number(latField) : Number(fallbackGeo.lat.toFixed(3));
  const lon = lonField ? Number(lonField) : Number(fallbackGeo.lon.toFixed(3));

  const nextProperty = {
    id: `sg-${Date.now()}`,
    name,
    city,
    locality,
    lat,
    lon,
    stage: "lead",
    floor: "Ground",
    frontage,
    size,
    rent,
    rsf,
    deposit: rent * 10,
    source,
    daysInStage: 0,
    reviewState: "new",
    photoUrl,
    media: {
      photos: photoUrl ? 1 : 0,
      floorplan: false,
      documents: [],
      photoUrl,
    },
    history: [
      { from: "new", to: "lead", note: "Captured on mobile with pin drop and photo", by: "Scout", at: "2026-06-29" },
    ],
  };

  sangeethaProperties.unshift(nextProperty);
  state.sangeethaPropertyId = nextProperty.id;
  state.sangeethaPropertyTab = "overview";
  closeForm();
  renderAll();
}

function renderSangeethaPropertyDetail() {
  const property = sangeethaPropertyById(state.sangeethaPropertyId);
  if (!property) {
    state.sangeethaPropertyId = null;
    state.sangeethaPropertyTab = "overview";
    return renderSangeethaDashboard();
  }

  const tab = state.sangeethaPropertyTab || "overview";

  return `
    <div class="sangeetha-dashboard sd-detail-page">
      <section class="sd-property-detail">
        <div class="sd-property-detail-head">
          <div class="detail-header-main">
            <button class="detail-back-button" type="button" data-sangeetha-close-detail aria-label="Back to map">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <div class="detail-title-block">
              <span class="detail-title-icon tone-3" aria-hidden="true">${escapeHtml(property.name.charAt(0))}</span>
              <div class="detail-title-copy">
                <div class="detail-eyebrow">${escapeHtml(property.city)} · ${escapeHtml(sangeethaStageLabel(property.stage))}</div>
                <h2 class="sd-property-title">${escapeHtml(property.name)}</h2>
              </div>
            </div>
          </div>
        </div>
        ${sangeethaDetailTabs()}
        ${sangeethaRenderPropertyActions(property)}
        <section class="sd-property-content">
          ${tab === "review" ? sangeethaRenderPropertyReview(property)
            : tab === "management" ? sangeethaRenderPropertyManagement(property)
              : tab === "media" ? sangeethaRenderPropertyMedia(property)
                : sangeethaRenderPropertyOverview(property)}
        </section>
      </section>
    </div>
  `;
}

function sangeethaGeo(lat, lon) {
  return {
    x: (((lon - 74) / 4.5) * 100).toFixed(1),
    y: (((18.5 - lat) / 7) * 100).toFixed(1),
  };
}

function sangeethaMapReferenceCities() {
  const grouped = new Map();

  sangeethaProperties.forEach((property) => {
    if (!property.city || typeof property.lat !== "number" || typeof property.lon !== "number") return;
    if (!grouped.has(property.city)) {
      grouped.set(property.city, { city: property.city, lat: property.lat, lon: property.lon, count: 1 });
      return;
    }
    const current = grouped.get(property.city);
    current.lat = (current.lat * current.count + property.lat) / (current.count + 1);
    current.lon = (current.lon * current.count + property.lon) / (current.count + 1);
    current.count += 1;
  });

  return Array.from(grouped.values());
}

function sangeethaMapRoutes() {
  return [
    ["Belagavi", "Hubballi"],
    ["Hubballi", "Davanagere"],
    ["Davanagere", "Tumakuru"],
    ["Tumakuru", "Bengaluru"],
    ["Bengaluru", "Mysuru"],
    ["Mysuru", "Mangaluru"],
  ];
}

function sangeethaComplianceStatus(property) {
  if (!property.licenses) return null;
  if (property.licenses.some((license) => license.status === "expired")) return "expired";
  if (property.licenses.some((license) => license.status === "expiring")) return "expiring";
  return "valid";
}

function sangeethaOpenIssueCount(property) {
  return (property.tickets ?? []).filter((ticket) => ticket.status === "open").length;
}

function sangeethaDaysUntil(dateStr) {
  const date = new Date(dateStr);
  const now = new Date("2026-06-29T00:00:00+05:30");
  return Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function sangeethaLeaseChip(property) {
  if (!property.lease) return null;
  const days = sangeethaDaysUntil(property.lease.expiry);
  if (days < 0) return { label: "expired", cls: "bad" };
  if (days <= 60) return { label: `${days}d to expiry`, cls: "due" };
  return { label: `${days}d to expiry`, cls: "ok" };
}

function sangeethaLeaseDaysLabel(property) {
  if (!property.lease) return "—";
  const days = sangeethaDaysUntil(property.lease.expiry);
  if (days < 0) return "Expired";
  return `${days} days`;
}

function sangeethaHealthCritical(property) {
  if (property.stage !== "live") return false;
  const compliance = sangeethaComplianceStatus(property);
  const lease = sangeethaLeaseChip(property);
  return compliance === "expired" || (lease && lease.cls === "bad") || sangeethaOpenIssueCount(property) > 0;
}

function sangeethaActiveProperties() {
  return sangeethaProperties.filter((property) => sangeethaDashboardState.stages.has(property.stage) && sangeethaDashboardState.cities.has(property.city));
}

function sangeethaVisibleMapProperties() {
  let items = sangeethaActiveProperties();
  if (sangeethaDashboardState.layer === "pipeline") {
    items = items.filter((property) => property.stage !== "live" && property.stage !== "closed");
  }
  if (sangeethaDashboardState.layer === "live") {
    items = items.filter((property) => property.stage === "live");
  }
  return items;
}

function sangeethaSortedProperties() {
  const rows = [...sangeethaProperties];
  rows.sort((left, right) => {
    const getValue = (property) => {
      if (sangeethaDashboardState.sortKey === "rent_per_sqft") return property.rsf;
      if (sangeethaDashboardState.sortKey === "size_carpet") return property.size;
      if (sangeethaDashboardState.sortKey === "monthly_rent") return property.lease ? property.lease.rent : property.rent;
      if (sangeethaDashboardState.sortKey === "lease_expiry") return property.lease ? property.lease.expiry : "9999";
      if (sangeethaDashboardState.sortKey === "compliance") return sangeethaComplianceStatus(property) ?? "zzz";
      if (sangeethaDashboardState.sortKey === "open_issues") return sangeethaOpenIssueCount(property);
      if (sangeethaDashboardState.sortKey === "stage") return property.stage;
      if (sangeethaDashboardState.sortKey === "city") return property.city;
      return property.name;
    };
    const leftValue = getValue(left);
    const rightValue = getValue(right);
    if (leftValue > rightValue) return sangeethaDashboardState.sortDir;
    if (leftValue < rightValue) return -sangeethaDashboardState.sortDir;
    return 0;
  });
  return rows;
}

function sangeethaRenderPipeline() {
  const properties = sangeethaActiveProperties().filter(sangeethaPipelineFocusItems);
  return `
    <div class="sd-board" id="sd-board">
      ${sangeethaStages
        .map((stage) => {
          const items = properties.filter((property) => property.stage === stage.key);
          return `
            <section class="sd-column ${stage.terminal ? "sd-terminal" : ""}" data-stage-drop="${escapeHtml(stage.key)}">
              <div class="sd-column-head">
                <span class="sd-column-title">${escapeHtml(stage.label)}</span>
                <span class="sd-column-count">${items.length}</span>
              </div>
              <div class="sd-column-body">
                ${items.length
                  ? items
                      .map((property) => {
                        const flags = [];
                        const nextStage = sangeethaPipelineStages[sangeethaStageIndex(property.stage) + 1] ?? null;
                        if (property.stage === "live") {
                          const compliance = sangeethaComplianceStatus(property);
                          if (compliance === "expired") flags.push('<span class="sd-flag sd-flag-crit">license expired</span>');
                          else if (compliance === "expiring") flags.push('<span class="sd-flag">license expiring</span>');
                          const lease = sangeethaLeaseChip(property);
                          if (lease && lease.cls !== "ok") flags.push(`<span class="sd-flag ${lease.cls === "bad" ? "sd-flag-crit" : ""}">lease ${escapeHtml(lease.label)}</span>`);
                          const issues = sangeethaOpenIssueCount(property);
                          if (issues > 0) flags.push(`<span class="sd-flag sd-flag-crit">${issues} open issue${issues > 1 ? "s" : ""}</span>`);
                        }
                        if (property.stage === "rejected") flags.push('<span class="sd-flag">reason logged</span>');
                        return `
                          <article class="sd-card" draggable="true" data-property-id="${escapeHtml(property.id)}" data-property-open="${escapeHtml(property.id)}" data-property-stage="${escapeHtml(property.stage)}">
                            <div class="sd-card-top">
                              <div class="sd-thumb">${sangeethaPropertyPreview(property)}</div>
                              <div class="sd-card-copy">
                                <div class="sd-card-name">${escapeHtml(property.name)}</div>
                                <div class="sd-card-loc">${escapeHtml(property.locality)}, ${escapeHtml(property.city)}</div>
                              </div>
                            </div>
                            <div class="sd-card-meta">
                              <span>₹${property.rsf}/sq.ft · ${property.size} sq.ft</span>
                              <span>${property.daysInStage}d in stage</span>
                            </div>
                            ${flags.length ? `<div class="sd-flags">${flags.join("")}</div>` : ""}
                            <div class="sd-card-actions">
                              <button class="sd-card-button" type="button" data-property-open="${escapeHtml(property.id)}">Open</button>
                              ${nextStage ? `<button class="sd-card-button" type="button" data-stage-target="${escapeHtml(nextStage)}" data-stage-property="${escapeHtml(property.id)}">Move to ${escapeHtml(sangeethaStageLabel(nextStage))}</button>` : ""}
                              ${property.stage === "live" ? '<button class="sd-card-button" type="button" data-property-open-tab="management" data-property-open="' + escapeHtml(property.id) + '">Management</button>' : ""}
                            </div>
                          </article>
                        `;
                      })
                      .join("")
                  : '<div class="sd-empty">No properties in this stage.</div>'}
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function sangeethaRenderMap() {
  const active = sangeethaVisibleMapProperties();
  const staged = active.filter((property) => sangeethaDashboardState.stages.has(property.stage));
  const referenceCities = sangeethaMapReferenceCities();
  const cityLookup = new Map(referenceCities.map((entry) => [entry.city, entry]));
  const streetLines = [
    { cls: "major h", x: 0, y: 16, w: 100, h: 0 },
    { cls: "major h", x: 0, y: 36, w: 100, h: 0 },
    { cls: "major h", x: 0, y: 58, w: 100, h: 0 },
    { cls: "major h", x: 0, y: 79, w: 100, h: 0 },
    { cls: "major v", x: 14, y: 0, w: 0, h: 100 },
    { cls: "major v", x: 34, y: 0, w: 0, h: 100 },
    { cls: "major v", x: 57, y: 0, w: 0, h: 100 },
    { cls: "major v", x: 78, y: 0, w: 0, h: 100 },
    { cls: "minor h", x: 8, y: 10, w: 34, h: 0 },
    { cls: "minor h", x: 39, y: 11, w: 30, h: 0 },
    { cls: "minor h", x: 62, y: 10, w: 24, h: 0 },
    { cls: "minor h", x: 5, y: 26, w: 27, h: 0 },
    { cls: "minor h", x: 37, y: 26, w: 36, h: 0 },
    { cls: "minor h", x: 63, y: 28, w: 28, h: 0 },
    { cls: "minor h", x: 8, y: 45, w: 29, h: 0 },
    { cls: "minor h", x: 41, y: 45, w: 34, h: 0 },
    { cls: "minor h", x: 66, y: 49, w: 20, h: 0 },
    { cls: "minor h", x: 11, y: 68, w: 22, h: 0 },
    { cls: "minor h", x: 38, y: 68, w: 39, h: 0 },
    { cls: "minor h", x: 62, y: 71, w: 26, h: 0 },
    { cls: "minor h", x: 10, y: 89, w: 26, h: 0 },
    { cls: "minor h", x: 40, y: 89, w: 34, h: 0 },
    { cls: "minor h", x: 68, y: 90, w: 20, h: 0 },
    { cls: "minor v", x: 8, y: 6, w: 0, h: 23 },
    { cls: "minor v", x: 24, y: 6, w: 0, h: 23 },
    { cls: "minor v", x: 46, y: 6, w: 0, h: 22 },
    { cls: "minor v", x: 68, y: 6, w: 0, h: 24 },
    { cls: "minor v", x: 88, y: 7, w: 0, h: 20 },
    { cls: "minor v", x: 6, y: 34, w: 0, h: 18 },
    { cls: "minor v", x: 26, y: 33, w: 0, h: 21 },
    { cls: "minor v", x: 48, y: 33, w: 0, h: 22 },
    { cls: "minor v", x: 68, y: 33, w: 0, h: 21 },
    { cls: "minor v", x: 90, y: 34, w: 0, h: 19 },
    { cls: "minor v", x: 9, y: 56, w: 0, h: 18 },
    { cls: "minor v", x: 29, y: 55, w: 0, h: 22 },
    { cls: "minor v", x: 49, y: 57, w: 0, h: 20 },
    { cls: "minor v", x: 71, y: 58, w: 0, h: 21 },
    { cls: "minor v", x: 87, y: 58, w: 0, h: 18 },
  ];
  const avenueLabels = [
    { name: "8th Street", x: 68, y: 18, rotate: 0 },
    { name: "Market Road", x: 18, y: 38, rotate: -65 },
    { name: "Link Road", x: 36, y: 12, rotate: -90 },
    { name: "7th Main", x: 54, y: 44, rotate: -90 },
    { name: "14th Avenue", x: 72, y: 60, rotate: 0 },
    { name: "Ring Road", x: 18, y: 82, rotate: 0 },
    { name: "1st Block Rd", x: 82, y: 40, rotate: -90 },
  ];
  const routeMarkup = sangeethaMapRoutes()
    .map(([from, to]) => {
      const start = cityLookup.get(from);
      const end = cityLookup.get(to);
      if (!start || !end) return "";
      const startPoint = sangeethaGeo(start.lat, start.lon);
      const endPoint = sangeethaGeo(end.lat, end.lon);
      return `<line x1="${startPoint.x}%" y1="${startPoint.y}%" x2="${endPoint.x}%" y2="${endPoint.y}%"></line>`;
    })
    .join("");

  return `
    <div class="sd-map-shell">
      ${sangeethaDashboardState.mapFiltersOpen ? `
        <aside class="sd-map-filters">
          <div class="sd-map-filters-head">
            <div class="sd-map-filters-title">Filters</div>
            <button class="sd-icon-button" type="button" data-map-filters-close aria-label="Close filters" title="Close filters">×</button>
          </div>
          <h4>Layer</h4>
          <div class="sd-chip-row" data-sd-chip-group="layer">
            <button class="sd-chip ${sangeethaDashboardState.layer === "all" ? "active" : ""}" type="button" data-layer="all">All</button>
            <button class="sd-chip ${sangeethaDashboardState.layer === "pipeline" ? "active" : ""}" type="button" data-layer="pipeline">Pipeline only</button>
            <button class="sd-chip ${sangeethaDashboardState.layer === "live" ? "active" : ""}" type="button" data-layer="live">Live stores only</button>
          </div>
          <h4>Live store health overlay</h4>
          <label class="sd-toggle">
            <input type="checkbox" id="sd-health-toggle" ${sangeethaDashboardState.health ? "checked" : ""} />
            show compliance / lease risk
          </label>
          <h4>Stage</h4>
          ${sangeethaAllStagesSelected() ? '<div class="sd-filter-summary">All stages</div>' : ""}
          <div class="sd-chip-row" data-sd-chip-group="stage">
            ${sangeethaStages
              .map((stage) => `<button class="sd-chip ${sangeethaDashboardState.stages.has(stage.key) && !sangeethaAllStagesSelected() ? "active" : ""}" type="button" data-stage="${escapeHtml(stage.key)}">${escapeHtml(stage.label)}</button>`)
              .join("")}
          </div>
          <h4>City</h4>
          ${sangeethaAllCitiesSelected() ? '<div class="sd-filter-summary">All cities</div>' : ""}
          <div class="sd-chip-row" data-sd-chip-group="city">
            ${sangeethaAllCityNames()
              .map((city) => `<button class="sd-chip ${sangeethaDashboardState.cities.has(city) && !sangeethaAllCitiesSelected() ? "active" : ""}" type="button" data-city="${escapeHtml(city)}">${escapeHtml(city)}</button>`)
              .join("")}
          </div>
        </aside>
      ` : ""}
      <div class="sd-map-area">
        <div class="sd-map-atmosphere" aria-hidden="true">
          <div class="sd-map-street-grid">
            ${streetLines
              .map((line) => `<span class="sd-map-street ${line.cls}" style="left:${line.x}%; top:${line.y}%; width:${line.w}%; height:${line.h}%;"></span>`)
              .join("")}
          </div>
          <div class="sd-map-blocks">
            <span class="sd-map-block" style="left:7%; top:7%; width:24%; height:18%;"></span>
            <span class="sd-map-block" style="left:38%; top:7%; width:28%; height:18%;"></span>
            <span class="sd-map-block" style="left:69%; top:8%; width:19%; height:17%;"></span>
            <span class="sd-map-block" style="left:8%; top:35%; width:22%; height:15%;"></span>
            <span class="sd-map-block" style="left:40%; top:35%; width:28%; height:15%;"></span>
            <span class="sd-map-block" style="left:70%; top:37%; width:17%; height:14%;"></span>
            <span class="sd-map-block" style="left:11%; top:58%; width:18%; height:15%;"></span>
            <span class="sd-map-block" style="left:42%; top:58%; width:26%; height:15%;"></span>
            <span class="sd-map-block" style="left:71%; top:59%; width:15%; height:15%;"></span>
          </div>
          ${avenueLabels
            .map((label) => `<div class="sd-map-road-label" style="left:${label.x}%; top:${label.y}%; transform: translate(-50%, -50%) rotate(${label.rotate}deg);">${escapeHtml(label.name)}</div>`)
            .join("")}
          <svg class="sd-map-routes" viewBox="0 0 100 100" preserveAspectRatio="none">
            ${routeMarkup}
          </svg>
        </div>
        <div class="sd-map-topbar">
          <button class="sd-icon-button sd-map-filters-open" type="button" data-map-filters-open aria-label="Open filters" title="Open filters">☰</button>
        </div>
        ${referenceCities
          .map((entry) => {
            const point = sangeethaGeo(entry.lat, entry.lon);
            return `
              <div class="sd-map-city" style="left:${point.x}%; top:${point.y}%;" aria-hidden="true">
                <span class="sd-map-city-dot"></span>
                <span class="sd-map-city-label">${escapeHtml(entry.city)}</span>
              </div>
            `;
          })
          .join("")}
        ${staged
          .map((property) => {
            const point = sangeethaGeo(property.lat, property.lon);
            const photoUrl = property.photoUrl || property.photo || property.media?.photoUrl || "";
            return `
              <button class="sd-pin ${property.stage}${sangeethaDashboardState.health && sangeethaHealthCritical(property) ? " health-bad" : ""}" type="button" style="left:${point.x}%; top:${point.y}%;" data-property-open="${escapeHtml(property.id)}">
                <span class="sd-pin-head">${photoUrl ? `<img src="${escapeHtml(photoUrl)}" alt="${escapeHtml(property.name)}" />` : `<span class="sd-pin-fallback">${escapeHtml((property.name || "S").charAt(0).toUpperCase())}</span>`}</span>
                <span class="stem"></span>
                <span class="sd-pin-label">
                  <span class="sd-pin-stage">${escapeHtml(sangeethaStageLabel(property.stage))}</span>
                  <span class="sd-pin-address">${escapeHtml(sangeethaPinAddressLabel(property))}</span>
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function sangeethaRenderList() {
  const rows = sangeethaSortedProperties();
  return `
    <div class="sd-list-shell">
      <table class="sd-grid">
        <thead>
          <tr>
            <th data-sort="name">Property</th>
            <th data-sort="city">City</th>
            <th data-sort="stage">Stage</th>
            <th data-sort="rent_per_sqft">Rent/sq.ft</th>
            <th data-sort="size_carpet">Size (sf)</th>
            <th data-sort="lease_expiry">Lease expiry</th>
            <th data-sort="compliance">Compliance</th>
            <th data-sort="open_issues">Open issues</th>
            <th data-sort="monthly_rent">Monthly rent</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map((property) => {
              const compliance = sangeethaComplianceStatus(property);
              const lease = sangeethaLeaseChip(property);
              return `
                <tr data-property-open="${escapeHtml(property.id)}">
                  <td>${escapeHtml(property.name)}</td>
                  <td>${escapeHtml(property.city)}</td>
                  <td>${escapeHtml(sangeethaStageLabel(property.stage))}</td>
                  <td>₹${property.rsf}</td>
                  <td>${property.size}</td>
                  <td>${property.lease ? escapeHtml(property.lease.expiry) : "—"}</td>
                  <td>${compliance ? `<span class="sd-chip-status ${compliance === "expired" ? "bad" : compliance === "expiring" ? "due" : "ok"}">${escapeHtml(compliance)}</span>` : "—"}</td>
                  <td>${property.stage === "live" ? sangeethaOpenIssueCount(property) : "—"}</td>
                  <td>${property.lease ? `₹${property.lease.rent.toLocaleString("en-IN")}` : "—"}</td>
                </tr>
              `;
            })
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function sangeethaRenderSummary() {
  const liveProperties = sangeethaProperties.filter((property) => property.stage === "live");
  const totalRent = liveProperties.reduce((sum, property) => sum + (property.lease ? property.lease.rent : 0), 0);
  const expiringSoon = liveProperties.filter((property) => property.lease && sangeethaDaysUntil(property.lease.expiry) <= 90 && sangeethaDaysUntil(property.lease.expiry) >= 0).length;
  const openRepairs = liveProperties.reduce((sum, property) => sum + sangeethaOpenIssueCount(property), 0);
  const funnelStages = ["lead", "under_review", "shortlisted", "approved", "fitout", "live"];
  const funnelCounts = funnelStages.map((stage) => sangeethaProperties.filter((property) => property.stage === stage).length);
  const maxCount = Math.max(...funnelCounts, 1);
  const cityCounts = Object.create(null);
  sangeethaProperties.forEach((property) => {
    cityCounts[property.city] = (cityCounts[property.city] ?? 0) + 1;
  });

  return `
    <div class="sd-summary-grid">
      <div class="sd-stat"><div class="sd-stat-number">${sangeethaProperties.length}</div><div class="sd-stat-label">Total properties</div></div>
      <div class="sd-stat"><div class="sd-stat-number">${liveProperties.length}</div><div class="sd-stat-label">Live stores</div></div>
      <div class="sd-stat"><div class="sd-stat-number">₹${(totalRent / 100000).toFixed(1)}L</div><div class="sd-stat-label">Monthly rent roll</div></div>
      <div class="sd-stat"><div class="sd-stat-number">${expiringSoon}</div><div class="sd-stat-label">Leases expiring ≤90d</div></div>
      <div class="sd-stat"><div class="sd-stat-number">${openRepairs}</div><div class="sd-stat-label">Open repair tickets</div></div>
    </div>
    <div class="sd-summary-grid-2">
      <section class="sd-summary-panel">
        <h3>Pipeline - conversion funnel</h3>
        <div class="sd-funnel">
          ${funnelStages
            .map((stage, index) => `
              <div class="sd-funnel-row">
                <span class="sd-funnel-label">${escapeHtml(sangeethaStageLabel(stage))}</span>
                <div class="sd-funnel-bar" style="width:${Math.max((funnelCounts[index] / maxCount) * 100, 4)}%;"></div>
                <span class="sd-funnel-count">${funnelCounts[index]}</span>
              </div>
            `)
            .join("")}
        </div>
      </section>
      <section class="sd-summary-panel">
        <h3>Portfolio health</h3>
        <table class="sd-mini-table">
          <thead>
            <tr><th>Store</th><th>Lease</th><th>Compliance</th></tr>
          </thead>
          <tbody>
            ${sangeethaProperties
              .map((property) => {
                const leaseLabel = sangeethaLeaseDaysLabel(property);
                const compliance = sangeethaComplianceStatus(property);
                return `
                  <tr data-property-open="${escapeHtml(property.id)}" data-property-open-tab="management">
                    <td>
                      <strong>${escapeHtml(property.name)}</strong>
                      <div class="sd-table-meta">${escapeHtml(property.city)} · ${escapeHtml(sangeethaStageLabel(property.stage))}</div>
                    </td>
                    <td>${escapeHtml(leaseLabel)}</td>
                    <td>${compliance ? `<span class="sd-chip-status ${compliance === "expired" ? "bad" : compliance === "expiring" ? "due" : "ok"}">${escapeHtml(compliance)}</span>` : "—"}</td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </section>
      <section class="sd-summary-panel">
        <h3>City coverage</h3>
        <table class="sd-mini-table">
          <thead><tr><th>City</th><th>Properties</th></tr></thead>
          <tbody>
            ${Object.entries(cityCounts)
              .map(([city, count]) => `<tr><td>${escapeHtml(city)}</td><td>${count}</td></tr>`)
              .join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
}

function renderSangeethaDashboard() {
  if (state.sangeethaPropertyId) {
    return renderSangeethaPropertyDetail();
  }

  return `
    <div class="sangeetha-dashboard">
      <div class="sd-shell">
        <header class="sd-header">
          <div class="sd-brand">
            <img class="sd-mark" src="${LOGO_URL}" alt="Sangeetha Mobiles logo" />
            <div>
              <div class="sd-brand-name">SANGEETHA MOBILES</div>
              <div class="sd-brand-sub">store lifecycle &amp; GIS · prototype</div>
            </div>
          </div>
          <nav class="sd-tabs" id="sd-tabnav">
            <button type="button" data-view="dashboard" class="${sangeethaDashboardState.view === "dashboard" ? "active" : ""}">Dashboard</button>
            <button type="button" data-view="pipeline" class="${sangeethaDashboardState.view === "pipeline" ? "active" : ""}">Pipeline</button>
            <button type="button" data-view="map" class="${sangeethaDashboardState.view === "map" ? "active" : ""}">Map</button>
            <button type="button" data-view="list" class="${sangeethaDashboardState.view === "list" ? "active" : ""}">List</button>
          </nav>
        </header>
        <section class="sd-view ${sangeethaDashboardState.view === "pipeline" ? "active" : ""}" data-view-panel="pipeline">${sangeethaRenderPipeline()}</section>
        <section class="sd-view ${sangeethaDashboardState.view === "map" ? "active" : ""}" data-view-panel="map">${sangeethaRenderMap()}</section>
        <section class="sd-view ${sangeethaDashboardState.view === "list" ? "active" : ""}" data-view-panel="list">${sangeethaRenderList()}</section>
        <section class="sd-view ${sangeethaDashboardState.view === "dashboard" ? "active" : ""}" data-view-panel="dashboard">${sangeethaRenderSummary()}</section>
      </div>
    </div>
  `;
}

function bindSangeethaDashboardEvents() {
  const nav = document.getElementById("sd-tabnav");
  nav?.querySelectorAll("button[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaDashboardState.view = button.dataset.view || "dashboard";
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-sd-action='capture']").forEach((button) => {
    button.addEventListener("click", () => {
      openSangeethaLeadCapture();
    });
  });

  document.querySelectorAll("[data-pipeline-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaDashboardState.pipelineFocus = button.dataset.pipelineFocus || "all";
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-view-panel='map'] .sd-chip[data-layer]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaDashboardState.layer = button.dataset.layer || "all";
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-view-panel='map'] .sd-chip[data-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.stage;
      if (!key) return;
      if (sangeethaDashboardState.stages.size === 1 && sangeethaDashboardState.stages.has(key)) {
        sangeethaDashboardState.stages = new Set(sangeethaStages.map((stage) => stage.key));
      } else {
        sangeethaDashboardState.stages = new Set([key]);
      }
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-view-panel='map'] .sd-chip[data-city]").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.city;
      if (!city) return;
      if (sangeethaDashboardState.cities.size === 1 && sangeethaDashboardState.cities.has(city)) {
        sangeethaDashboardState.cities = new Set(sangeethaAllCityNames());
      } else {
        sangeethaDashboardState.cities = new Set([city]);
      }
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-map-filters-close]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaDashboardState.mapFiltersOpen = false;
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-map-filters-open]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaDashboardState.mapFiltersOpen = true;
      renderHeroPanel();
    });
  });

  const healthToggle = document.getElementById("sd-health-toggle");
  if (healthToggle) {
    healthToggle.addEventListener("change", (event) => {
      sangeethaDashboardState.health = Boolean(event.target.checked);
      renderHeroPanel();
    });
  }

  document.querySelectorAll("[data-stage-drop]").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("drag-over");
    });
    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });
    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("drag-over");
      const propertyId = event.dataTransfer?.getData("text/property-id");
      const nextStage = column.dataset.stageDrop;
      if (!propertyId || !nextStage) return;
      if (nextStage === "rejected") {
        const property = sangeethaPropertyById(propertyId);
        const reason = window.prompt(`Why reject ${property?.name ?? "this lead"}?`, property?.rejectionReason ?? "Rejected after review");
        if (reason === null) return;
        sangeethaUpdatePropertyStage(propertyId, nextStage, { reason: reason.trim() || "Rejected after review" });
        return;
      }
      sangeethaUpdatePropertyStage(propertyId, nextStage);
    });
  });

  document.querySelectorAll("[draggable='true'][data-property-id]").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer?.setData("text/property-id", card.dataset.propertyId || "");
      event.dataTransfer?.setData("text/property-stage", card.dataset.propertyStage || "");
      card.classList.add("is-dragging");
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("is-dragging");
      document.querySelectorAll("[data-stage-drop].drag-over").forEach((column) => column.classList.remove("drag-over"));
    });
  });

  document.querySelectorAll("[data-stage-target]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const propertyId = button.dataset.stageProperty || button.closest("[data-property-id]")?.dataset.propertyId || "";
      const nextStage = button.dataset.stageTarget || "";
      if (!propertyId || !nextStage) return;
      if (nextStage === "rejected") {
        const property = sangeethaPropertyById(propertyId);
        const reason = window.prompt(`Why reject ${property?.name ?? "this lead"}?`, property?.rejectionReason ?? "Rejected after review");
        if (reason === null) return;
        sangeethaUpdatePropertyStage(propertyId, nextStage, { reason: reason.trim() || "Rejected after review" });
        return;
      }
      sangeethaUpdatePropertyStage(propertyId, nextStage);
    });
  });

  document.querySelectorAll("[data-property-open]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation?.();
      const propertyId = item.dataset.propertyOpen || item.dataset.propertyId || "";
      const tab = item.dataset.propertyOpenTab || "overview";
      if (!propertyId) return;
      sangeethaOpenProperty(propertyId, tab);
    });
  });

  document.querySelectorAll("[data-sangeetha-close-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaCloseProperty();
    });
  });

  document.querySelectorAll("[data-sangeetha-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sangeethaPropertyTab = button.dataset.sangeethaTab || "overview";
      renderHeroPanel();
    });
  });

  document.querySelectorAll("[data-sangeetha-action='close']").forEach((button) => {
    button.addEventListener("click", () => {
      sangeethaCloseProperty();
    });
  });

  document.querySelectorAll("[data-sangeetha-action='capture']").forEach((button) => {
    button.addEventListener("click", () => {
      openSangeethaLeadCapture();
    });
  });

  document.querySelectorAll("[data-view-panel='list'] th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const sortKey = th.dataset.sort;
      if (sangeethaDashboardState.sortKey === sortKey) sangeethaDashboardState.sortDir *= -1;
      else {
        sangeethaDashboardState.sortKey = sortKey;
        sangeethaDashboardState.sortDir = 1;
      }
      renderHeroPanel();
    });
  });

}

function renderDashboard() {
  return;
}

function renderAdminWorkspace() {
  const allTableKeys = tables.map((table) => table.key);
  return `
    <div class="admin-workspace">
      <div class="admin-workspace-head">
        <button class="new-record-button" type="button" id="add-user-button">+ Add user</button>
      </div>
      <div class="admin-user-list">
        ${userAccounts.map((user) => {
          const hasFullAccess = allTableKeys.every((tableKey) => user.table_access.includes(tableKey));
          const accessMarkup = hasFullAccess
            ? `<span class="admin-access-chip admin-access-chip-full">Full access</span>`
            : user.table_access.map((tableKey) => `<span class="admin-access-chip">${escapeHtml(getTableByKey(tableKey)?.title ?? tableKey)}</span>`).join("");

          return `
            <article class="admin-user-card" data-user-id="${escapeHtml(user.id)}">
              <div class="admin-user-main">
                <div class="admin-user-title-row">
                  <strong>${escapeHtml(user.name)}</strong>
                  <span class="admin-user-role">${escapeHtml(user.role)}</span>
                </div>
                <div class="admin-user-meta">
                  <span>${escapeHtml(user.email)}</span>
                  <span>${escapeHtml(user.status)}</span>
                  <span>${escapeHtml(user.venture_scope || "All ventures")}</span>
                </div>
                <div class="admin-user-password">Password: ${escapeHtml(user.password)}</div>
                <div class="admin-user-access">
                  ${accessMarkup}
                </div>
              </div>
              <div class="admin-user-actions">
                <button class="record-action-button" type="button" data-user-action="edit" data-user-id="${escapeHtml(user.id)}">Edit</button>
                <button class="record-action-button" type="button" data-user-action="delete" data-user-id="${escapeHtml(user.id)}">Delete</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function bindAdminWorkspaceEvents() {
  document.getElementById("add-user-button")?.addEventListener("click", () => {
    openAdminUserForm();
  });

  document.querySelectorAll("[data-user-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { userAction, userId } = button.dataset;
      if (userAction === "edit") openAdminUserForm(userId);
      if (userAction === "delete") deleteAdminUser(userId);
    });
  });
}

function renderSearch() {
  return;
}

function summarizeRecord(record) {
  const parts = [];
  if (record.status) parts.push(`Status ${record.status}`);
  if (record.type) parts.push(`Type ${Array.isArray(record.type) ? record.type.join(", ") : record.type}`);
  if (record.project) parts.push(`Project ${record.project}`);
  if (record.venture) parts.push(`Venture ${record.venture}`);
  if (record.task) parts.push(`Task ${record.task}`);
  if (record.due_date) parts.push(`Due ${record.due_date}`);
  if (record.direction) parts.push(`Direction ${record.direction}`);
  return parts.join(" · ") || "Linked record";
}

function getFieldDisplayValue(field, record) {
  if (field.name === "venture") {
    const hierarchy = getHierarchyContext(record);
    if (hierarchy.venture) return String(hierarchy.venture);
  }

  if (field.name === "project") {
    const hierarchy = getHierarchyContext(record);
    if (hierarchy.project) return String(hierarchy.project);
  }

  const rawValue = record?.[field.name];
  if (rawValue == null) return "";
  const relation = getRelationConfig(field.name);
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );
  if (isPeopleRelation) {
    if (Array.isArray(rawValue)) return rawValue.map((item) => formatPersonDisplayLabel(item)).filter(Boolean).join(", ");
    return formatPersonDisplayLabel(rawValue);
  }
  if (Array.isArray(rawValue)) return formatList(rawValue);
  if (state.activeTable === "transactions" && field.name === "amount") return formatIndianNumber(rawValue);
  return String(rawValue);
}

function sanitizeStakeInput(value, { finalize = false } = {}) {
  let normalized = String(value ?? "")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  const parts = normalized.split(".");
  if (parts.length > 2) {
    normalized = `${parts[0]}.${parts.slice(1).join("")}`;
  }

  if (parts[1] != null) {
    normalized = `${parts[0]}.${parts[1].slice(0, 2)}`;
  }

  if (!finalize) return normalized;
  if (!normalized || normalized === ".") return "";

  const numeric = Number(normalized);
  if (Number.isNaN(numeric)) return "";
  const clamped = Math.min(Math.max(numeric, 0), 100);
  return String(clamped).replace(/\.0+$/, "").replace(/(\.\d*[1-9])0+$/, "$1");
}

function renderOwnershipRow(entry = {}, index = 0, options = []) {
  const label = entry.venture ?? entry.name ?? entry.label ?? "";
  const stake = sanitizeStakeInput(entry.stake ?? "", { finalize: true });
  const sortedOptions = sortOptionsAlpha(options);
  return `
    <div class="ownership-row" data-ownership-row>
      <label class="ownership-field">
        <span>Venture</span>
        <select name="owner_ventures_venture_${index}">
          <option value="">Select venture</option>
          ${sortedOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${label === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
      <label class="ownership-field stake-field">
        <span>Stake %</span>
        <input name="owner_ventures_stake_${index}" class="ownership-stake-input" type="text" inputmode="decimal" value="${escapeHtml(stake)}" placeholder="0.00" />
      </label>
      <button class="ownership-remove" type="button" data-ownership-remove aria-label="Remove venture">×</button>
    </div>
  `;
}

function renderOwnershipRepeater(record = null, currentTableKey = "") {
  const ventureOptions = getRelationOptions("owner_ventures", currentTableKey, record);
  const values = Array.isArray(record?.owner_ventures) && record.owner_ventures.length
    ? record.owner_ventures.map((entry) => (typeof entry === "object" && entry !== null ? entry : { venture: entry, stake: "" }))
    : [{ venture: "", stake: "" }];

  return `
    <div class="ownership-repeater" data-ownership-repeater>
      <div class="ownership-repeater-head">
        <span>Owner ventures</span>
        <button class="ownership-add" type="button" data-ownership-add>+ Add venture</button>
      </div>
      <div class="ownership-repeater-list" data-ownership-list>
        ${values.map((entry, index) => renderOwnershipRow(entry, index, ventureOptions)).join("")}
      </div>
      <small class="form-hint">Choose a venture, enter stake %, and add another row if needed.</small>
    </div>
  `;
}

function renderDurationField(field, record = null) {
  const rawValue = String(record?.[field.name] ?? field.value ?? "").trim();
  const parsedValue = parseDurationValue(rawValue);
  const value = parsedValue?.amount ?? "";
  const unit = parsedValue?.unit ?? "h";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const hint = field.name === "estimate"
    ? "Use hours or days. Saved as `h` or `d` for the Gantt chart."
    : "Use the same unit format as estimated time.";

  return `
    <label class="form-field">
      <span>${label}</span>
      <div class="duration-field-row">
        <input
          name="${escapeHtml(field.name)}_value"
          type="number"
          min="0.25"
          step="0.25"
          inputmode="decimal"
          value="${escapeHtml(value)}"
          placeholder="0"
        />
        <select name="${escapeHtml(field.name)}_unit">
          ${durationUnits.map((option) => `<option value="${option.value}" ${unit === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </div>
      <small class="form-hint">${hint}</small>
    </label>
  `;
}

function renderField(field, record = null, currentTableKey = "") {
  const required = field.required ? "required" : "";
  const defaultValue = field.value ?? (
    field.type === "date"
      ? formatLocalDateForInput()
      : field.type === "datetime-local"
        ? formatLocalDateTimeForInput()
        : ""
  );
  const fieldValue = record ? getFieldDisplayValue(field, record) : defaultValue;
  const valueAttr = fieldValue ? `value="${escapeHtml(fieldValue)}"` : "";
  const placeholder = field.placeholder ? `placeholder="${escapeHtml(field.placeholder)}"` : "";
  const step = field.step ? `step="${escapeHtml(field.step)}"` : "";
  const inputMode = field.inputmode ? `inputmode="${escapeHtml(field.inputmode)}"` : "";
  const dataFormat = field.data_format ? `data-format="${escapeHtml(field.data_format)}"` : "";
  const label = `${escapeHtml(field.label)}${field.required ? " *" : ""}`;
  const relation = getRelationConfig(field.name);
  const relationOptions = relation ? getRelationOptions(field.name, currentTableKey, record) : [];
  const sortedRelationOptions = sortOptionsAlpha(relationOptions);
  const selectedValues = Array.isArray(record?.[field.name])
    ? record[field.name].map((value) => String(value))
    : fieldValue
      ? [String(fieldValue)]
      : [];
  const isPeopleRelation = Boolean(relation) && (
    relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
  );

  if (currentTableKey === "assets" && field.name === "owner_ventures") {
    return renderOwnershipRepeater(record, currentTableKey);
  }

  if (currentTableKey === "tasks" && (field.name === "estimate" || field.name === "time_logged")) {
    return renderDurationField(field, record);
  }

  if (isPeopleRelation) {
    if (relation?.multiple) {
      const selectedLabels = sortedRelationOptions
        .filter((option) => selectedValues.includes(option.value))
        .map((option) => option.label);
      const summaryText = selectedLabels.length
        ? selectedLabels.join(", ")
        : "Select one or more";

      return `
        <label class="form-field">
          <span>${label}</span>
          <details class="multi-select-dropdown">
            <summary class="multi-select-summary">${escapeHtml(summaryText)}</summary>
            <div class="multi-select-menu">
              ${sortedRelationOptions.map((option) => `
                <label class="multi-select-option">
                  <input type="checkbox" name="${escapeHtml(field.name)}" value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "checked" : ""} />
                  <span>${escapeHtml(option.label)}</span>
                </label>
              `).join("")}
            </div>
          </details>
        </label>
      `;
    }

    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${sortedRelationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (relation) {
    if (relation.multiple) {
      const selectedLabels = sortedRelationOptions
        .filter((option) => selectedValues.includes(option.value))
        .map((option) => option.label);
      const summaryText = selectedLabels.length
        ? selectedLabels.join(", ")
        : "Select one or more";
      return `
        <label class="form-field">
          <span>${label}</span>
          <details class="multi-select-dropdown">
            <summary class="multi-select-summary">${escapeHtml(summaryText)}</summary>
            <div class="multi-select-menu">
              ${sortedRelationOptions.map((option) => `
                <label class="multi-select-option">
                  <input type="checkbox" name="${escapeHtml(field.name)}" value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "checked" : ""} />
                  <span>${escapeHtml(option.label)}</span>
                </label>
              `).join("")}
            </div>
          </details>
          <small class="form-hint">Select one or more existing records.</small>
        </label>
      `;
    }

    const hierarchy = getHierarchyContext(record);
    const isProjectSelect = field.name === "project" && (currentTableKey === "tasks" || hierarchyAttachmentTables.has(currentTableKey));
    const isTaskSelect = field.name === "task" && hierarchyAttachmentTables.has(currentTableKey);
    const selectPlaceholder = isTaskSelect
      ? (hierarchy.project ? "Select task" : "Select project first")
      : isProjectSelect
        ? (hierarchy.venture ? "Select project" : "Select venture first")
        : "Select";
    const disabledAttr = isTaskSelect
      ? (hierarchy.project ? "" : "disabled")
      : isProjectSelect
        ? (hierarchy.venture ? "" : "disabled")
        : "";

    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required} ${disabledAttr}>
          <option value="">${escapeHtml(selectPlaceholder)}</option>
          ${sortedRelationOptions.map((option) => `<option value="${escapeHtml(option.value)}" ${selectedValues.includes(option.value) ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (field.type === "textarea") {
    return `
      <label class="form-field">
        <span>${label}</span>
        <textarea name="${escapeHtml(field.name)}" rows="4" ${required} ${placeholder}>${escapeHtml(fieldValue)}</textarea>
      </label>
    `;
  }

  if (field.type === "select") {
    const fieldOptions = field.options ?? [];
    return `
      <label class="form-field">
        <span>${label}</span>
        <select name="${escapeHtml(field.name)}" ${required}>
          <option value="">Select</option>
          ${fieldOptions.map((option) => `<option value="${escapeHtml(option)}" ${fieldValue === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
        </select>
      </label>
    `;
  }

  if (field.type === "checkbox") {
    return `
      <label class="form-field checkbox-field">
        <input name="${escapeHtml(field.name)}" type="checkbox" ${record?.[field.name] ? "checked" : ""} />
        <span>${label}</span>
      </label>
    `;
  }

  return `
    <label class="form-field">
      <span>${label}</span>
      <input name="${escapeHtml(field.name)}" type="${escapeHtml(field.type)}" ${required} ${valueAttr} ${placeholder} ${step} ${inputMode} ${dataFormat} />
    </label>
  `;
}

function renderAdminUserForm(user = null) {
  const ventureOptions = ["All ventures", ...sortStringsAlpha(data.ventures.map((venture) => venture.name))];
  const selectedTables = user?.table_access ?? [];
  const sortedRoles = sortStringsAlpha(accessRoles);
  const sortedStatuses = sortStringsAlpha(["Active", "Suspended"]);

  return `
    <label class="form-field">
      <span>Name *</span>
      <input name="user_name" type="text" value="${escapeHtml(user?.name ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Email *</span>
      <input name="user_email" type="email" value="${escapeHtml(user?.email ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Password *</span>
      <input name="user_password" type="text" value="${escapeHtml(user?.password ?? "")}" required />
    </label>
    <label class="form-field">
      <span>Role *</span>
      <select name="user_role" required>
        ${sortedRoles.map((roleKey) => `<option value="${escapeHtml(roleKey)}" ${user?.role === roleKey ? "selected" : ""}>${escapeHtml(roleKey)}</option>`).join("")}
      </select>
    </label>
    <label class="form-field">
      <span>Status *</span>
      <select name="user_status" required>
        ${sortedStatuses.map((status) => `<option value="${status}" ${user?.status === status ? "selected" : ""}>${status}</option>`).join("")}
      </select>
    </label>
    <label class="form-field">
      <span>Venture scope</span>
      <select name="user_venture_scope">
        ${ventureOptions.map((option) => `<option value="${escapeHtml(option)}" ${(user?.venture_scope ?? "All ventures") === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
    <fieldset class="admin-access-fieldset">
      <legend>Table access</legend>
      <div class="admin-access-grid">
        ${tables.map((table) => `
          <label class="admin-access-option">
            <input type="checkbox" name="user_table_access" value="${escapeHtml(table.key)}" ${selectedTables.includes(table.key) ? "checked" : ""} />
            <span>${escapeHtml(table.title)}</span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function openForm(key, recordId = null) {
  const table = tables.find((item) => item.key === key);
  if (!table) return;
  const record = recordId ? data[key].find((item) => item.id === recordId) ?? null : null;
  const entityLabel = table.singular || table.title;
  state.activeTable = key;
  state.modalEntity = "table";
  state.modalMode = record ? "edit" : "create";
  state.editingRecordId = record?.id ?? null;
  state.editingUserId = null;
  el.modalTitle.textContent = `${record ? "Edit" : "Add"} ${entityLabel}`;
  el.modalSubtitle.textContent = `${table.fields.length} fields`;
  el.form.innerHTML = table.fields.map((field) => renderField(field, record, key)).join("");
  el.saveButton.textContent = `${record ? "Save" : "Create"} ${entityLabel}`;
  el.modal.classList.add("open");
  syncBodyModalState();
  bindFormattedInputs();
  bindOwnershipRepeater(key);
  bindHierarchyFilters(record);
}

function openAdminUserForm(userId = null) {
  const user = userId ? userAccounts.find((item) => item.id === userId) ?? null : null;
  state.modalEntity = "user";
  state.modalMode = user ? "edit" : "create";
  state.editingUserId = user?.id ?? null;
  state.editingRecordId = null;
  el.modalTitle.textContent = `${user ? "Edit" : "Add"} User`;
  el.modalSubtitle.textContent = "Password and access control";
  el.form.innerHTML = renderAdminUserForm(user);
  el.saveButton.textContent = `${user ? "Save" : "Create"} User`;
  el.modal.classList.add("open");
  syncBodyModalState();
  bindFormattedInputs();
}

function syncBodyModalState() {
  if (el.modal?.classList.contains("open") || el.confirmModal?.classList.contains("open")) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }
}

function openDeleteConfirm(message, confirmLabel = "Delete") {
  if (confirmResolve) {
    confirmResolve(false);
    confirmResolve = null;
  }

  el.confirmTitle.textContent = "Delete item?";
  el.confirmMessage.textContent = message;
  el.confirmDeleteButton.textContent = confirmLabel;
  el.confirmModal.classList.add("open");
  syncBodyModalState();
  el.confirmCancelButton.focus();

  return new Promise((resolve) => {
    confirmResolve = resolve;
  });
}

function closeDeleteConfirm(result = false) {
  if (!confirmResolve) {
    el.confirmModal.classList.remove("open");
    syncBodyModalState();
    return;
  }

  const resolve = confirmResolve;
  confirmResolve = null;
  el.confirmModal.classList.remove("open");
  syncBodyModalState();
  resolve(result);
}

function bindOwnershipRepeater(tableKey) {
  const repeater = el.formElement.querySelector("[data-ownership-repeater]");
  if (!repeater || tableKey !== "assets") return;
  const list = repeater.querySelector("[data-ownership-list]");
  const addButton = repeater.querySelector("[data-ownership-add]");
  const ventureOptions = getRelationOptions("owner_ventures", tableKey);
  let rowIndex = list.querySelectorAll("[data-ownership-row]").length;

  const bindStakeInput = (row) => {
    const input = row.querySelector(".ownership-stake-input");
    if (!(input instanceof HTMLInputElement)) return;

    input.addEventListener("input", () => {
      input.value = sanitizeStakeInput(input.value);
    });

    input.addEventListener("blur", () => {
      input.value = sanitizeStakeInput(input.value, { finalize: true });
    });
  };

  const buildRow = (entry = {}) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = renderOwnershipRow(entry, rowIndex, ventureOptions).trim();
    rowIndex += 1;
    const row = wrapper.firstElementChild;
    bindStakeInput(row);
    row.querySelector("[data-ownership-remove]")?.addEventListener("click", () => {
      if (list.querySelectorAll("[data-ownership-row]").length <= 1) {
        row.querySelectorAll("select,input").forEach((input) => {
          if (input.tagName === "SELECT") input.value = "";
          else input.value = "";
        });
        return;
      }
      row.remove();
    });
    return row;
  };

  addButton?.addEventListener("click", () => {
    list.appendChild(buildRow());
  });

  list.querySelectorAll("[data-ownership-row]").forEach((row) => {
    bindStakeInput(row);
    row.querySelector("[data-ownership-remove]")?.addEventListener("click", () => {
      if (list.querySelectorAll("[data-ownership-row]").length <= 1) {
        row.querySelectorAll("select,input").forEach((input) => {
          if (input.tagName === "SELECT") input.value = "";
          else input.value = "";
        });
        return;
      }
      row.remove();
    });
  });
}

function bindHierarchyFilters(record = null) {
  const ventureSelect = el.formElement?.elements?.venture;
  const projectSelect = el.formElement?.elements?.project;
  const taskSelect = el.formElement?.elements?.task;

  if (!(ventureSelect instanceof HTMLSelectElement)) return;
  if (!(projectSelect instanceof HTMLSelectElement)) return;

  const syncTaskOptions = () => {
    if (!(taskSelect instanceof HTMLSelectElement)) return;

    const selectedTask = taskSelect.value.trim();
    const selectedProject = projectSelect.value.trim();
    const options = getRelationOptions("task", state.activeTable, record);

    taskSelect.innerHTML = [
      `<option value="">${escapeHtml(selectedProject ? "Select task" : "Select project first")}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
    ].join("");

    taskSelect.disabled = !selectedProject;

    if (selectedTask && options.some((option) => option.value === selectedTask)) {
      taskSelect.value = selectedTask;
      return;
    }

    if (record?.task && options.some((option) => option.value === record.task)) {
      taskSelect.value = record.task;
      return;
    }

    taskSelect.value = "";
  };

  const syncProjectOptions = () => {
    const selectedProject = projectSelect.value.trim();
    const selectedVenture = ventureSelect.value.trim();
    const options = getRelationOptions("project", state.activeTable, record);

    projectSelect.innerHTML = [
      `<option value="">${escapeHtml(selectedVenture ? "Select project" : "Select venture first")}</option>`,
      ...options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`),
    ].join("");

    projectSelect.disabled = !selectedVenture;

    if (selectedProject && options.some((option) => option.value === selectedProject)) {
      projectSelect.value = selectedProject;
    } else if (record?.project && options.some((option) => option.value === record.project)) {
      projectSelect.value = record.project;
    } else {
      projectSelect.value = "";
    }

    syncTaskOptions();
  };

  ventureSelect.addEventListener("change", syncProjectOptions);
  projectSelect.addEventListener("change", syncTaskOptions);
  syncProjectOptions();
}

function bindFormattedInputs() {
  el.form.querySelectorAll('input[data-format="transaction-amount"]').forEach((input) => {
    const applyFormatting = () => {
      input.value = formatIndianNumber(input.value);
    };

    applyFormatting();
    input.addEventListener("input", applyFormatting);
  });
}

function normalizeHierarchicalRecord(tableKey, record) {
  if (tableKey === "tasks") {
    const projectRow = String(record.project ?? "").trim() ? getProjectByName(String(record.project).trim()) : null;
    if (projectRow?.venture) {
      record.venture = String(projectRow.venture).trim();
    }
    return record;
  }

  if (!hierarchyAttachmentTables.has(tableKey)) return record;

  const selectedTask = String(record.task ?? "").trim();
  const selectedProject = String(record.project ?? "").trim();
  let selectedVenture = String(record.venture ?? "").trim();

  const taskRow = selectedTask ? getTaskByTitle(selectedTask) : null;
  const projectRow = selectedProject ? getProjectByName(selectedProject) : null;

  if (taskRow?.project) {
    record.project = String(taskRow.project).trim();
  } else if (selectedProject) {
    record.project = selectedProject;
  } else {
    record.project = "";
  }

  const resolvedProjectRow = record.project ? getProjectByName(record.project) : projectRow;
  if (resolvedProjectRow?.venture) {
    selectedVenture = String(resolvedProjectRow.venture).trim();
  }

  if (!selectedVenture && taskRow?.project) {
    const taskProject = getProjectByName(taskRow.project);
    if (taskProject?.venture) {
      selectedVenture = String(taskProject.venture).trim();
    }
  }

  record.venture = selectedVenture;
  record.task = selectedTask;
  return record;
}

function closeForm() {
  el.modal.classList.remove("open");
  syncBodyModalState();
  state.modalMode = "create";
  state.modalEntity = "table";
  state.editingRecordId = null;
  state.editingUserId = null;
}

function buildRecordFromForm(table) {
  const formData = new FormData(el.formElement);
  const record = {};
  const hierarchy = getHierarchyContext();

  table.fields.forEach((field) => {
    if (field.type === "checkbox") {
      record[field.name] = el.formElement.elements[field.name].checked;
      return;
    }

    if (table.key === "tasks" && (field.name === "estimate" || field.name === "time_logged")) {
      const rawAmount = String(formData.get(`${field.name}_value`) ?? "").trim();
      const amount = Number(rawAmount);
      const unit = String(formData.get(`${field.name}_unit`) ?? "h").trim();
      record[field.name] = rawAmount && Number.isFinite(amount) && amount > 0
        ? formatDurationValue(amount, unit === "d" ? "d" : "h")
        : "";
      return;
    }

    if (table.key === "assets" && field.name === "owner_ventures") {
      const rows = Array.from(el.formElement.querySelectorAll("[data-ownership-row]"));
      record[field.name] = rows
        .map((row) => {
          const venture = row.querySelector(`select[name^="owner_ventures_venture_"]`)?.value?.trim() ?? "";
          const rawStake = row.querySelector(`input[name^="owner_ventures_stake_"]`)?.value?.trim() ?? "";
          const stake = sanitizeStakeInput(rawStake, { finalize: true });
          if (!venture) return null;
          return { venture, stake };
        })
        .filter(Boolean);
      return;
    }

    const relation = getRelationConfig(field.name);
    const isPeopleRelation = Boolean(relation) && (
      relation.table === "people" || (Array.isArray(relation.tables) && relation.tables.includes("people"))
    );

    if (isPeopleRelation) {
      if (relation?.multiple) {
        record[field.name] = formData.getAll(field.name).map((value) => String(value).trim()).filter(Boolean);
      } else {
        record[field.name] = String(formData.get(field.name) ?? "").trim();
      }
      return;
    }

    if (relation?.multiple) {
      record[field.name] = formData.getAll(field.name).map((value) => String(value).trim()).filter(Boolean);
      return;
    }

    const rawValue = String(formData.get(field.name) ?? "").trim();
    if (!rawValue) {
      record[field.name] = "";
      return;
    }

    if (table.key === "transactions" && field.name === "amount") {
      record[field.name] = formatIndianNumber(rawValue);
      return;
    }

    if (arrayFields.has(field.name)) {
      record[field.name] = rawValue.split(",").map((item) => item.trim()).filter(Boolean);
      return;
    }

    if (field.type === "number") {
      record[field.name] = Number(rawValue);
      return;
    }

    record[field.name] = rawValue;
  });

  if (table.key === "tasks") {
    const linkedProject = data.projects.find((item) => item.name === record.project) ?? null;
    if (linkedProject?.venture) {
      record.venture = linkedProject.venture;
    }
  }

  return normalizeHierarchicalRecord(table.key, record);
}

async function saveRecord() {
  const table = tables.find((item) => item.key === state.activeTable);
  if (!table) return;

  const payload = buildRecordFromForm(table);
  let nextRecord = null;

  if (state.modalMode === "edit" && state.editingRecordId) {
    const index = data[table.key].findIndex((item) => item.id === state.editingRecordId);
    if (index >= 0) {
      nextRecord = { ...data[table.key][index], ...payload };
      await syncRecordToSupabase(table.key, nextRecord);
      data[table.key][index] = nextRecord;
    }
  } else {
    nextRecord = {
      id: `${table.key.slice(0, 3)}_${Date.now()}`,
      createdAt: new Date().toISOString(),
      ...payload,
    };
    await syncRecordToSupabase(table.key, nextRecord);
    data[table.key].unshift(nextRecord);
  }

  closeForm();
  renderAll();
}

function saveAdminUser() {
  const formData = new FormData(el.formElement);
  const payload = {
    name: String(formData.get("user_name") ?? "").trim(),
    email: String(formData.get("user_email") ?? "").trim(),
    password: String(formData.get("user_password") ?? "").trim(),
    role: String(formData.get("user_role") ?? "Employee").trim(),
    status: String(formData.get("user_status") ?? "Active").trim(),
    venture_scope: String(formData.get("user_venture_scope") ?? "All ventures").trim(),
    table_access: formData.getAll("user_table_access").map((value) => String(value)),
  };

  if (state.modalMode === "edit" && state.editingUserId) {
    const index = userAccounts.findIndex((item) => item.id === state.editingUserId);
    if (index >= 0) userAccounts[index] = { ...userAccounts[index], ...payload };
  } else {
    userAccounts.unshift({
      id: `usr_${Date.now()}`,
      ...payload,
    });
  }

  closeForm();
  renderAll();
}

async function deleteAdminUser(userId) {
  const user = userAccounts.find((item) => item.id === userId);
  if (!user) return false;
  const approved = await openDeleteConfirm(`Delete ${user.name}?`);
  if (!approved) return false;
  const index = userAccounts.findIndex((item) => item.id === userId);
  if (index >= 0) userAccounts.splice(index, 1);
  renderAll();
  return true;
}

async function deleteRecord(tableKey, recordId) {
  const table = tables.find((item) => item.key === tableKey);
  if (!table) return false;
  const row = data[tableKey].find((item) => item.id === recordId);
  const label = row?.name || row?.title || row?.reference || table.singular || table.title;
  const approved = await openDeleteConfirm(`Delete ${label}?`);
  if (!approved) return false;
  await removeRecordFromSupabase(tableKey, recordId);
  data[tableKey] = data[tableKey].filter((item) => item.id !== recordId);
  renderAll();
  return true;
}

function bindEvents() {
  el.homeButton.addEventListener("click", () => {
    state.activeNav = "dashboard";
    state.search = "";
    state.detailTableKey = null;
    state.detailRecordId = null;
    state.detailTreeOpen = false;
    clearDetailHistory();
    renderSidebarNav();
    renderHeroPanel();
  });

  el.sidebarToggle.addEventListener("click", () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    applySidebarState();
  });

  if (el.projectSelect) {
    el.projectSelect.addEventListener("change", (event) => {
      state.projectId = event.target.value;
    });
  }

  if (el.taskSelect) {
    el.taskSelect.addEventListener("change", (event) => {
      state.taskId = event.target.value;
      const task = data.tasks.find((item) => item.id === state.taskId);
      const project = data.projects.find((item) => item.name === task?.project);
      if (project) state.projectId = project.id;
    });
  }

  el.confirmModal.addEventListener("click", (event) => {
    if (event.target === el.confirmModal) closeDeleteConfirm(false);
  });

  el.closeButton.addEventListener("click", closeForm);
  el.confirmCancelButton.addEventListener("click", () => closeDeleteConfirm(false));
  el.confirmDeleteButton.addEventListener("click", () => closeDeleteConfirm(true));
  el.formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.modalEntity === "user") saveAdminUser();
    else if (state.modalEntity === "sangeetha-lead") {
      try {
        saveSangeethaLeadCapture();
      } catch (error) {
        console.error("Failed to save Sangeetha lead", error);
        window.alert(`Save failed: ${error?.message ?? "Unknown error"}`);
      }
    }
    else {
      try {
        await saveRecord();
      } catch (error) {
        console.error("Failed to save record", error);
        window.alert(`Save failed: ${error?.message ?? "Unknown error"}`);
      }
    }
  });

  el.heroPanel.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest("[data-gantt-shift],[data-gantt-today],[data-gantt-month-shift],[data-gantt-nav-shift],[data-gantt-open]") : null;
    if (!(target instanceof HTMLElement) || state.activeNav !== "gantt") return;

    if (target.dataset.ganttShift) {
      shiftGanttWindow(Number(target.dataset.ganttShift || 0));
      return;
    }

    if (target.dataset.ganttToday) {
      resetGanttToday();
      return;
    }

    if (target.dataset.ganttMonthShift) {
      jumpGanttMonth(Number(target.dataset.ganttMonthShift || 0));
      return;
    }

    if (target.dataset.ganttNavShift) {
      shiftGanttWindow(Number(target.dataset.ganttNavShift || 0));
      return;
    }

    if (target.dataset.ganttOpen) {
      const recordId = target.dataset.ganttOpen;
      const tableKey = target.dataset.ganttTable;
      if (!recordId || !tableKey) return;
      openRecordDetail(tableKey, recordId, { preserveNav: true });
    }
  });

  el.heroPanel.addEventListener("change", (event) => {
    if (state.activeNav !== "gantt") return;

    if (event.target instanceof HTMLSelectElement && event.target.dataset.ganttScale) {
      setGanttScale(event.target.value);
      syncGanttUrl(getGanttWeekStart());
      renderHeroPanel();
      return;
    }

    const target = event.target instanceof HTMLInputElement ? event.target : null;
    if (!target?.dataset.ganttDate) return;

    const nextStart = getDateAtDayStart(target.value);
    if (!nextStart) return;
    setGanttWeekStart(nextStart);
    syncGanttUrl(nextStart);
    renderHeroPanel();
  });

  window.addEventListener("popstate", () => {
    applyUrlState();
    renderSidebarNav();
    renderHeroPanel();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (el.confirmModal.classList.contains("open")) {
      closeDeleteConfirm(false);
      return;
    }
    if (state.sangeethaPropertyId) {
      sangeethaCloseProperty();
      return;
    }
    closeForm();
  });
}

function renderAll() {
  renderMeta();
  applySidebarState();
  renderSidebarNav();
  renderSidebarFooter();
  renderHeroPanel();
  renderSelectors();
  renderDashboard();
  renderSearch();
}

async function init() {
  el.layout = document.querySelector(".layout");
  el.sidebarNav = document.getElementById("sidebar-nav");
  el.sidebarFooter = document.getElementById("sidebar-footer");
  el.homeButton = document.getElementById("home-button");
  el.sidebarToggle = document.getElementById("sidebar-toggle");
  el.heroPanel = document.getElementById("hero-panel");
  el.modal = document.getElementById("modal");
  el.modalTitle = document.getElementById("modal-title");
  el.modalSubtitle = document.getElementById("modal-subtitle");
  el.formElement = document.querySelector(".form");
  el.form = document.getElementById("form");
  el.closeButton = document.getElementById("close-button");
  el.saveButton = document.getElementById("save-button");
  el.confirmModal = document.getElementById("confirm-modal");
  el.confirmTitle = document.getElementById("confirm-title");
  el.confirmMessage = document.getElementById("confirm-message");
  el.confirmCancelButton = document.getElementById("confirm-cancel");
  el.confirmDeleteButton = document.getElementById("confirm-delete");

  applyUrlState();
  bindEvents();
  renderAll();
  hydrateDataFromSupabase()
    .then(() => {
      renderAll();
    })
    .catch((error) => {
      console.error("Falling back to local seed data", error);
    });
}

init().catch((error) => {
  console.error("App boot failed", error);
  document.body.dataset.bootError = error?.message ?? String(error);
});

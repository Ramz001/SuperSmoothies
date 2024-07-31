import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL ?? "";
const key = process.env.REACT_APP_ANON_KEY ?? "";

if (!url || !key) throw new Error("Missing Supabase URL or Anon Key ENVs");

const supabase = createClient(url, key);

export default supabase;

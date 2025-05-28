import fetch from "node-fetch";

interface FoodRecall {
  recall_number?: string;
  product_description?: string;
  reason_for_recall?: string;
  status?: string;
  distribution_pattern?: string;
  product_quantity?: string;
  classification?: string;
  code_info?: string;
  recalling_firm?: string;
  report_date?: string;
  event_id?: string;
  [key: string]: any;
}

export async function getFoodRecalls(
  limit = 10
): Promise<FoodRecall[] | undefined> {
  const url = `https://api.fda.gov/food/enforcement.json?limit=${limit}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`openFDA API error: ${response.status}`);
    }

    const data = (await response.json()) as { results: FoodRecall[] };
    return data.results;
  } catch (error) {
    console.error("Error fetching food recalls:", error);
    return undefined;
  }
}

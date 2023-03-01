// A mock function to mimic making an async request for data
export async function fetchModes() {
  try {
    const result = await fetch('http://demo7919674.mockable.io');
    
    return await result.json();
  } catch(e) {
    console.error(e);

    return [];
  }
}

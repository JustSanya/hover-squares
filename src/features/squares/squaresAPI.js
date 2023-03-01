export async function fetchModes() {
  try {
    //TODO: change fetch to axios
    const result = await fetch('http://demo7919674.mockable.io');
    
    return await result.json();
  } catch(e) {
    console.error(e);

    return [];
  }
}

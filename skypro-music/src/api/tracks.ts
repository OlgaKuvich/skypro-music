export async function getTracks() {
  try {
    const res = await fetch(
      "https://skypro-music-api.skyeng.tech/catalog/track/all/"
  );
    if (!res.ok) {
      if (res.status === 401) {
      throw new Error("Ошибка при получении данных");
  } else {
    throw new Error(`Ошибка, статус: ${res.status}`);
  }
}
const data = await res.json();
return data;
  } catch (error) {
console.warn(error);
throw error
  }
}   

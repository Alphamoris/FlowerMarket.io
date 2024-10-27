import { getalluserid } from "@/apilib/Apilib";

export async function getStaticPaths() {
    try {
      // In a real application, fetch from your API
      // const response = await fetch('https://api.yourstore.com/products');
      // const products = await response.json();
      
      // Using sample data for demonstration
      const data = await getalluserid();
  
      const paths = data.map((id) => ({
        params: { id: id.toString() }
      }));
  
      return {
        paths,
        // fallback: false - returns 404 for unknown paths
        // fallback: true - generates pages on demand (needs loading state)
        // fallback: 'blocking' - generates pages on demand (no loading state)
        fallback: 'true'
      };
    } catch (error) {
      console.error('Error generating paths:', error);
      return {
        paths: [],
        fallback: 'blocking'
      };
    }
  }
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export async function GET( req: any, res: any ) {
  if (req.method === 'GET') {
    try {
      const placeId = process.env.GOOGLE_PLACE_ID;
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

      const response = await axios.get(url);
      console.log(response.data)
      return res.status(200).json(response.data.result.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return res.status(500).json({ error: 'An error occurred while fetching reviews' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
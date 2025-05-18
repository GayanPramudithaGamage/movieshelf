import axios from 'axios'
import { ShowDto } from '../dto/ShowDto.js'

const API_BASE = 'https://api.tvmaze.com'

export const searchShows = async (query) => {
  const response = await axios.get(`${API_BASE}/search/shows?q=${query}`)
  return response.data.map(item => new ShowDto(item.show))
}

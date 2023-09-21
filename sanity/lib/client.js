import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skTNanPmp56Fl18F4Bbl0DJXt2romOHGExoCA92tCU2teifMdZ0xxPY9XgSnuUzyLQXskv8qdeLq31Bz8xjwKEFsamxg60Ckyoc7KP2zX774V5Chc2PzMY1OjrlXCHoSbumH3jDOFQWgkY2ua5DTHTqKjaQ5vOpLjsTIZjOcVTITJW8weKg0"
})

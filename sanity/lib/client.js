import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skoa854Df63EIZNfwaOFrC8VmoQSYUt8cbCaC6WmwOAAePvpYA6TvQNJwkJtUMhQLsOHiUHuQdI25sFfTmaskr7L1XKMH6SiEMuyFBFqZBoR0w4dAV59OaRhCk0tyAKbkDpbOJTh7zj7ZlgWfaUhlPJQYYsjEw0AmcWu7uZVwhN2rQa0dWEC"
})

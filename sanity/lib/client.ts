// Add react cache import
import { cache } from "react";

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client));
import type { PageLoad } from './$types';
import { committees } from '$lib/data';
import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
  for (let committee of committees) {
    if (committee.slug === params.committee) {
      return committee;
    }
  }

  redirect(303, '/committees');
};

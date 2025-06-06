import type { PageLoad } from './$types';
import { committees } from '$lib/data';
import { redirect } from '@sveltejs/kit';
import prisma from '$lib/prisma';

export const load: PageLoad = async ({ params }) => {
  for (let committee of committees) {
    if (committee.slug === params.committee) {
      const allos = await prisma.allocation.findMany({
        where: {
          committee: committee.maps ?? committee.name,
        },
        include: {
          committee: false,
        }
      });

      return { committee, allos };
    }
  }

  redirect(303, '/committees');
};

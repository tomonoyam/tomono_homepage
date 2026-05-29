import rss from '@astrojs/rss';
import { articles } from '../data/articles';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'AUTOSAR.MAGIC — 車に宿る魔法体系',
    description: 'AUTOSARと車載ソフトウェアの世界を、魔法の言葉で読み解く技術ブログ。BSW・CAN・RTE・SWC・診断通信・組み込みCをカバー。',
    site: context.site ?? 'https://tomono-homepage.vercel.app',
    customData: '<language>ja</language>',
    items: articles.map(a => ({
      title: `【${a.chapter}】${a.title} — ${a.sub}`,
      description: a.desc,
      pubDate: new Date(a.date),
      link: `/topics/${a.chapterSlug}/${a.slug}/`,
      categories: a.tags,
    })),
    stylesheet: false,
  });
}

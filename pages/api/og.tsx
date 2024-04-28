import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
    runtime: 'edge',
};

export default async function handler(request: NextRequest) {
    try {
        const fontData = await fetch(
            new URL('https://1900.live/assets/fonts/maple-ui.ttf', import.meta.url),
        ).then((res) => res.arrayBuffer());

        const { searchParams } = new URL(request.url);

        const originalTitle = searchParams.get('title');

        let title = originalTitle;

        if (!title) {
            title = 'A Hugo blog about Charles Chin.';
        } else {
            title = title.slice(0, 100);
        }

        return new ImageResponse(
            (      
            <div
                tw="flex flex-col w-full h-full p-[50px] justify-between bg-zinc-50"
                style={{
                  backgroundImage: `url(")`,
                }}
              >
                <div tw="flex items-center">
                  <div tw="flex w-[50px] h-[50px] rounded-full shadow overflow-hidden mr-[20px]">
                    {/* @ts-expect-error src 的类型正确 */}
                    <img tw="w-full h-full" src="https://cdn.1900.live/20190640/ico.png" />
                  </div>
                  <span tw="text-[20px] text-zinc-700">只是玩玩 | All work and no play makes Jack a dull boy</span>
                </div>
                <div tw="flex flex-col text-left">
                  <h1 tw="text-left text-[45px] font-bold m-0 leading-none">keyguard：一个好用的 Bitwarden 第三方安卓客户端</h1>
                  <p tw="text-left text-[30px] text-zinc-500 m-0 mt-[20px]">Bitwarden 是一个优秀的开源全平台密码管理软件。 </p>
                </div>
                <div tw="flex justify-end">
                  <span tw="text-[26px] text-violet-500">HaydenHayden.com</span>
                </div>
              </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Noto Serif',
                        data: fontData,
                        style: 'normal',
                    },
                ],
            },
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
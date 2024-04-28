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
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        backgroundColor: 'white',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            alt="1900"
                            height={256}
                            src="https://cdn.1900.live/20190640/ico.png"
                            style={{ margin: '0 60px 0 100px' }}
                            width={256}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginRight: '100px',
                            alignItems: 'flex-start',
                            width: '680px',
                            minWidth: '680px'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 48,
                                fontStyle: 'normal',
                                color: 'black',
                                marginTop: 0,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                                marginRight: 'auto',
                            }}
                        >
                            <b>只是玩玩&apos;Blog</b>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 40,
                                fontStyle: 'normal',
                                color: 'black',
                                marginTop: 15,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            <b>《{title}》</b>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 32,
                                fontStyle: 'normal',
                                color: 'dimgray',
                                marginTop: 15,
                                lineHeight: 1.8,
                                whiteSpace: 'pre-wrap',
                                marginLeft: 'auto',
                            }}
                        >
                            <small>- 1900 (@1900)</small>
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Maple UI',
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
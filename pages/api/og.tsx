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
        const originalTags = searchParams.get('tags');
        const originalDate = searchParams.get('date');

        let title = originalTitle;
        let tags = originalTags;

        if (!title) {
            title = 'A Hugo blog about Charles Chin.';
        } else {
            title = title.slice(0, 100);
        }

        if (!tags){
            tags = '分享';
        }else{
            tags = tags.slice(0, 20);
        }

        return new ImageResponse(
            (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '400px',
                    border: 'solid 1px',
                    justifyContent: 'flex-end',
                    backgroundColor: 'white'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      <span style={{
                        backgroundColor: 'red',
                        padding: '0px 15px',
                        color: 'white',
                        borderRadius: '5px',
                        fontStyle: 'italic',
                        letterSpacing: '3px',
                      }}>{tags}</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '10px 0px 25px 0px',
                      minHeight: '209px',
                    }}>
                      <p style={{
                        fontSize: '41px',
                        fontWeight: 'bolder',
                        margin: '0',
                        fontStyle: 'italic',
                        textAlign: 'center',
                        lineHeight: '1.2',
                        padding: '0 35px',
                      }}>{title}</p>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                    }}>
                      <div style={{
                        display: 'flex',
                        marginLeft: '20px',
                      }}>
                        <img src="https://cdn.1900.live/20190640/ico.png" style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                        }} />
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          lineHeight: '1',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontStyle: 'italic',
                          fontWeight: '900',
                          marginLeft: '13px',
                        }}>
                          <span style={{ fontSize: '20px' }}>@1900</span>
                          <span>https://1900.live</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{
                          fontSize: '20px',
                          marginRight: '20px',
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                        }}>{originalDate}</span>
                      </div>
                    </div>
                    <div style={{}} />
                  </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Maple UI',
                        data: fontData,
                        style: 'italic',
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
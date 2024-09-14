import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "edge",
};

export default async function handler(request: NextRequest) {
    try {
        const fontData = await fetch(
            new URL("https://1900.live/SmileySans.ttf", import.meta.url)
        ).then((res) => res.arrayBuffer());

        const { searchParams } = new URL(request.url);

        const originalTitle = searchParams.get("title");
        const originalTags = searchParams.get("tags");
        const originalDesc = searchParams.get("desc");
        const originalDate = searchParams.get("date");

        let title = originalTitle;
        let tags = originalTags;
        let desc = originalDesc;
        let date = originalDate;

        if (!title) {
            title = "A Hugo blog about Charles Chin.";
        } else {
            let dot = title.length >= 20 ? "..." : "";
            title = title.slice(0, 22) + dot;
        }

        if (!tags) {
            tags = "分享";
        } else {
            tags = tags.slice(0, 10);
        }

        if (!desc) {
            desc = "All work and no play makes Jack a dull boy";
        } else {
            desc = desc.slice(0, 90) + "...";
        }

        if (!date) {
            date = "1900/01/01";
        }

        return new ImageResponse(
            (
                // <div style={{
                //     display: 'flex',
                //     flexDirection: 'column',
                //     height: '400px',
                //     width: '800px',
                //     backgroundColor: 'white',
                //     border: 'solid 1px',
                //     justifyContent: 'flex-end'
                //   }}>
                //     <div style={{
                //       display: 'flex',
                //       justifyContent: 'center'
                //     }}>
                //       <span style={{
                //         backgroundColor: 'red',
                //         padding: '5px 15px',
                //         color: 'white',
                //         borderRadius: '5px',
                //         fontStyle: 'italic',
                //         letterSpacing: '3px'
                //       }}>
                //         {tags}
                //       </span>
                //     </div>
                //     <div style={{
                //       display: 'flex',
                //       padding: '40px 0px 25px 0px',
                //       minHeight: '210px',
                //       flexDirection: 'column',
                //       alignItems: 'center',
                //     }}>
                //       <p style={{
                //         fontSize: '50px',
                //         fontWeight: 'bolder',
                //         margin: '0',
                //         fontStyle: 'italic',
                //         textAlign: 'center',
                //         lineHeight: '1.2',
                //         padding: '0 35px'
                //       }}>
                //         {title}
                //       </p>
                //       <p style={{
                //         fontSize: '28px',
                //         fontWeight: 'bolder',
                //         marginTop: '40px',
                //         fontStyle: 'italic',
                //         textAlign: 'center',
                //         padding: '0 35px',
                //         color: '#8b949e',
                //         textIndent: '2em'
                //       }}>
                //        「   {desc}    」
                //       </p>
                //     </div>
                //     <div style={{
                //       display: 'flex',
                //       justifyContent: 'space-between',
                //       marginBottom: '25px'
                //     }}>
                //       <div style={{
                //         display: 'flex',
                //         marginLeft: '50px'
                //       }}>
                //         <img src="https://cdn.1900.live/20190640/ico.png" style={{
                //           width: '50px',
                //           height: '50px',
                //           borderRadius: '50%'
                //         }} alt="icon" />
                //         <div style={{
                //           display: 'flex',
                //           flexDirection: 'column',
                //           lineHeight: '1',
                //           justifyContent: 'center',
                //           fontSize: '14px',
                //           fontStyle: 'italic',
                //           fontWeight: '900',
                //           marginLeft: '13px'
                //         }}>
                //           <span style={{
                //             fontSize: '20px'
                //           }}>
                //             @1900
                //           </span>

                //         </div>
                //       </div>
                //       <div style={{
                //         display: 'flex',
                //         alignItems: 'center'
                //       }}>
                //         <span style={{
                //           fontSize: '20px',
                //           marginRight: '50px',
                //           fontWeight: 'bold',
                //           fontStyle: 'italic'
                //         }}>
                //           {date}
                //         </span>
                //       </div>
                //     </div>
                //     {/* The last div is empty and has no content or styles, so it's not included in the JSX */}
                //   </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "400px",
                        width: "800px",
                        backgroundColor: "white",
                        border: "solid 1px",
                        justifyContent: "flex-end",
                        overflow: "hidden",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderRadius: "0.375rem",
                        backgroundImage:
                            "url(https://img.is26.com/https://c2.is26.com/blog/2024/03/setapp/c-1.jpg/w=800)",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            backgroundColor: "rgba(75, 85, 99, 0.3)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        ></div>
                        <div
                            style={{
                                display: "flex",
                                padding: "40px 0px 25px 0px",
                                minHeight: "210px",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <p
                                style={{
                                    fontSize: "50px",
                                    fontWeight: "bolder",
                                    margin: "0",
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    lineHeight: "1.2",
                                    padding: "0 35px",
                                }}
                            >
                                文章内链接自动增加网站icon
                            </p>
                            <p
                                style={{
                                    fontSize: "28px",
                                    fontWeight: "bolder",
                                    marginTop: "40px",
                                    fontStyle: "italic",
                                    textAlign: "center",
                                    padding: "0 35px",
                                    color: "#8b949e",
                                    textIndent: "2em",
                                }}
                            >
                                「
                                为什么做这个之前使用罗磊的一款名为【Yasuko】的主题时发现了一个很有意思的功能：文章内的链接能自动增加来源站的icon。
                                」
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "25px",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    marginLeft: "50px",
                                }}
                            >
                                <img
                                    src="https://cdn.1900.live/20190640/ico.png"
                                    style={{
                                        width: "50px",
                                        height: "50px",
                                        borderRadius: "50%",
                                    }}
                                    alt="icon"
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        lineHeight: "1",
                                        justifyContent: "center",
                                        fontSize: "14px",
                                        fontStyle: "italic",
                                        fontWeight: "900",
                                        marginLeft: "13px",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "20px",
                                        }}
                                    >
                                        @1900
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "20px",
                                        marginRight: "50px",
                                        fontWeight: "bold",
                                        fontStyle: "italic",
                                    }}
                                >
                                    2025-01-01
                                </span>
                            </div>
                        </div>
                        {/* The last div is empty and has no content or styles, so it's not included in the JSX */}
                    </div>
                </div>
            ),
            {
                width: 800,
                height: 400,
                fonts: [
                    {
                        name: "SmileySans",
                        data: fontData,
                        style: "italic",
                    },
                ],
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}

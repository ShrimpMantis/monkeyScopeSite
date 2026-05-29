'use client';
import { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { url } from "@/utilities/helper";
import { useParams } from "next/navigation";
import SideBySideTextImageStyled from "@/components/styledComponents/SideBySideTextImage.styled";
import styled from "styled-components";
import { media } from "@/utilities/breakpoints";
import { useParallaxPages } from "@/contexts/ParallaxPagesContext";
import { useViewport } from "@/utilities/viewport";

const StyledTeamSection = styled.div`
    ${media.narrowPortrait} {
        padding: 12% 4% 4%;
    }

    ${media.compactLandscape} {
        padding: clamp(2.5rem, 10vh, 3.5rem) 4% 3%;
    }

    ${media.tabletLandscape} {
        padding: 8% 4% 4%;
    }
`;

const getDetailPageCount = (isNarrow, isCompact) => {
    if (isCompact) return 1.2;
    return isNarrow ? 1.4 : 1.3;
};

const action = async (id) => {
    const baseUrl = '/api/teamDetail';
    const currUrl = `${baseUrl}?id=${id}`;
    const fetchResult = await fetch(currUrl);
    const teamDeets = await fetchResult.json();
    return teamDeets;
   };

const Page = () => {
    const params = useParams();
    const [detail, setDetail] = useState(null);
    const { setPagesOverride, clearPagesOverride } = useParallaxPages();
    const { isNarrow, isCompact } = useViewport();
    const detailPages = getDetailPageCount(isNarrow, isCompact);

    useEffect(() => {
        const res = async () => {
            const result = await action(params.id);
            setDetail(result);
        }
        res();
    }, [params.id]);

    useEffect(() => {
        setPagesOverride(detailPages);
        return () => clearPagesOverride();
    }, [detailPages, setPagesOverride, clearPagesOverride]);

    return (
        <>
            <ParallaxLayer
                offset={0}
                speed={0}
                factor={0.4}
                style={{
                    backgroundImage: url(`${detail?.mainImage?.src}`, true),
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom 30%'
                }}
            />

            <ParallaxLayer offset={0.35} speed={0} factor={detailPages - 0.35}>
                <StyledTeamSection>
                    {detail &&
                        <SideBySideTextImageStyled 
                            content={detail.content}
                            title={"Title"}
                            imageInfo={detail.imageInfo}
                            isFlip={false}
                            hrefValue={detail.link}
                            btnText={"more"}
                        >
                            {/* <h1>Name</h1> */}
                        </SideBySideTextImageStyled>
                    }
                </StyledTeamSection>
            </ParallaxLayer>
        </>
    );
}

export default Page;

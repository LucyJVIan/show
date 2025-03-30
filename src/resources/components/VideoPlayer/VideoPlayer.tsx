import { memo, useCallback, useRef, useState } from 'react';

import { VideoWrapper, StyledVideo, PlayButton } from './VideoPlayer-styles';
import { VideoPlayerProps } from './VideoPlayer-types';
import { IconVideoPlay } from '../Icons';

export const VideoPlayer = memo<VideoPlayerProps>((props) => {
    const { video } = props;

    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying((prev) => !prev);
        }
    }, [isPlaying]);

    return (
        <VideoWrapper $isPlaying={isPlaying}>
            <StyledVideo ref={videoRef} src={video} onClick={togglePlay} controls={false} />

            {!isPlaying && (
                <PlayButton>
                    <IconVideoPlay />
                </PlayButton>
            )}
        </VideoWrapper>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

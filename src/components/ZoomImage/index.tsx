import { useEffect, useRef, useState, cloneElement } from 'react'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const CustomZoomContent = ({ img, onUnzoom }) => {
    const [scale, setScale] = useState(1);
    return (
        <div
            onClick={onUnzoom}
            style={{ position: 'relative', width: '100%', height: '100%', }}
        >
            <div style={{
                position: 'relative', width: '100%', height: '100%',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                transform: `scale(${scale})`, transition: 'transform 0.3s'
            }}
            >
                {img}
            </div>

            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '10px'
            }}>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setScale(scale == 1 ? 2 : 1);
                    }}
                >
                    {scale == 1 ? '2倍' : '还原'}
                </button>
                <button onClick={onUnzoom}>
                    ✕
                </button>
            </div>
        </div>
    );
};

const ZoomImage = ({ src, alt }) => {
    return (
        <Zoom ZoomContent={CustomZoomContent}>
            <img src={src} alt={alt} />
        </Zoom>
    );
};

export default ZoomImage;
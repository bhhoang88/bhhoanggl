import React from "react";

interface ImageOptimizeProps {
    alt?: string;
    src: string;
    [key: string]: any;
}

const ImageOptimize: React.FC<ImageOptimizeProps> = ({ src, alt, ...rest }) => {
    return (
        <img
            alt={alt || "Vikky by HDBank"}
            src={src}
            {...rest}
        />
    );
}

export default ImageOptimize;

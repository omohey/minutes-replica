import ReactDOMServer from 'react-dom/server';

export const svgToDataURL = (Component: React.FC<any>, props: any) => {
    const svgString = ReactDOMServer.renderToString(<Component {...props} />);
    const encoded = encodeURIComponent(svgString)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');

    return `data:image/svg+xml;charset=utf-8,${encoded}`;
};
import edjsHTML from 'editorjs-html'

export default function ProductDescription({ description }: { description: any }) {
    const edjsParser = edjsHTML();
    const HTML = edjsParser.parse(description);
    return (
      <>
        {HTML}
      </>
    );
  }
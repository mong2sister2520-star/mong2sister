type StitchFrameProps = {
  html: string;
  title: string;
};

export function StitchFrame({ html, title }: StitchFrameProps) {
  return (
    <iframe
      className="fixed inset-0 h-screen w-screen border-0"
      srcDoc={html}
      title={title}
    />
  );
}

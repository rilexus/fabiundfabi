import Media from "./Media/Media";

const Container = ({
  default: _default = `
      margin-right: auto;
      margin-left: auto;
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      width: 100%;`,
  xsm = `
        width: 100%;
        padding: 0 5px;
      `,
  md = `
        max-width: 720px;
      `,
  lg = `
        max-width: 960px;
      `,
  xl = `
        max-width: 1140px;
      `,
  ...props
}) => {
  return (
    <Media
      {...props}
      default={_default}
      xsm={xsm}
      md={md}
      lg={lg}
      // xl={xl}
    />
  );
};

export default Container;

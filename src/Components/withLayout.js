import Layout from "./layOut";

const withLayout = (WrappedComponent) => {
  return (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};

export default withLayout;

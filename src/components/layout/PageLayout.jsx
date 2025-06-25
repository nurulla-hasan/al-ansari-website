

const PageLayout = ({ children }) => {
    return (
        <div className='container 2xl:w-5/6 mx-auto py-20 px-3'>
            {children}
        </div>
    );
};

export default PageLayout
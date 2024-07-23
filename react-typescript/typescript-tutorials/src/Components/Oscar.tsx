type Oscar = {
    children: React.ReactNode;
};
function Oscar({ children }: Oscar) {
    return <div>{children}</div>;
}

export default Oscar;

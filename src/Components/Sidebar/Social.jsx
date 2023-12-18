const Social = () => {

    const items = [
        "Homepage","Services","Portfolio","Contact","About"
    ]

    return (
        <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5 ">
            {
                items.map(item => (
                    <a className="text-2xl font-semibold" href={`#${item}`} key={item}>{item}</a>
                ))
            }
        </div>
    );
};

export default Social;
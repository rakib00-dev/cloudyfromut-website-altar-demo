const Hero = () => {
  const style = {
    angledBox: {
      backgroundColor: '#eee7e2',
      color: '#0b3055',
      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'calluna, serif',
    },
  };
  return (
    <section className="relative mb-20 mt-0 w-full max-w-7xl mx-auto">
      <div
        className="relative h-full"
        style={{
          background:
            'url(/images/hero/rothschildandco-london-buildings-38-hr.jpg) 50% / cover',
          height: '400px',
        }}
      >
        <div className="absolute -bottom-10 left-5 md:left-15">
          <h1
            className=" text-lg w-4/5 max-w-xs p-4 md:text-4xl md:max-w-lg md:p-8"
            style={style.angledBox}
          >
            One of the world&apos;s largest independent financial services
            groups
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

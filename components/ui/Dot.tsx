const Dot = () => {
  return (
    <div className='flex gap-2'>
      {Array.from({ length: 3 })
        .fill(null)
        .map((_, index) => (
          <div className='size-1 rounded-full bg-color-3' />
        ))}
    </div>
  );
};

export default Dot;

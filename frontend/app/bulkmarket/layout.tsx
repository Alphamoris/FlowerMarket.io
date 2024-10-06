
export default function layout2({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return (

        <>
        {children}
        <h4 className="text-bg-warning tex m-0 text-center display-1 fs-6">Bulk Market is only for customers who purchase flowers <strong className=" fw-bolder">More Than 10kg</strong> </h4>
        </>
    )
}
import "../scss/elements/progress_bar.scss";

// const pagination = $(".pagination");

// pagination.on("click", function(){
// //   console.log(pagination);
//   $(this).find(".circle").toggleClass("active");
// })

document.getElementsByClassName("pagination").onclick = function() {circleMarking()};

const circleMarking = () => {
  document.getElementsByClassName("pagination").toggleClass("active");
}

const ProgressBar = () => {

return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                <li className="page-item active" aria-current="page">
                    <span className="page-link"></span>
                </li>
                <li className="page-item active"><a className="page-link active" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
                <li className="page-item"><a className="page-link" href="#"></a></li>
            </ul>
        </nav>

//         <div class="container">
//   <a class="pagination" href="#"><span class="circle"></span></a>
//   <a class="pagination" href="#"><span class="circle"></span></a>
//   <a class="pagination" href="#"><span class="circle"></span></a>
//   <a class="pagination" href="#"><span class="circle"></span></a>
// </div>
)
    }


export default ProgressBar
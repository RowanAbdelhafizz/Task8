import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios/instance";

function ProductDetails() {
    const { id } = useParams();
    const api = 'c93b8d11a6a8c8a7c70f43e8b2a01a9c';
    const path = 'https://image.tmdb.org/t/p/w500';
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axiosInstance.get(`/3/movie/${id}`, {params: {api_key: api,}}).then((Show) => {
            setMovie(Show.data)
            console.log(Show.data);
        }).catch((err) => {
            console.log(err);
        })
    },[])    
    return (<>
        <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4">
                <h1>{ movie.title}</h1>
                    <div className="card text-black">
                        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                        <img src={path+movie.poster_path}
                            className="card-img-top" alt="Apple Computer" />
                        <div className="card-body">
                            <div className="text-center">
                                <h5 className="card-title">{ movie.name}</h5>
                                <p className="text-muted mb-4">{ movie.overview}</p>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>Year</span>
                                    <span>{movie.first_air_date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>);
}

export default ProductDetails;
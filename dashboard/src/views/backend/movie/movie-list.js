import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap'
import Card  from '../../../components/Card'
import  {getMovies} from '../../../firebase/firestore'
import {setMovies} from '../../../store/movies/moviesSlices'
import { useDispatch, useSelector } from 'react-redux';


//img
import mt01 from '../../../assets/images/movie-thumb/01.jpg'
import mt02 from '../../../assets/images/movie-thumb/02.jpg'
import mt03 from '../../../assets/images/movie-thumb/03.jpg'
import mt04 from '../../../assets/images/movie-thumb/04.jpg'
import mt05 from '../../../assets/images/movie-thumb/05.jpg'
import mt06 from '../../../assets/images/movie-thumb/06.jpg'
import mt07 from '../../../assets/images/movie-thumb/07.jpg'
import mt08 from '../../../assets/images/movie-thumb/08.jpg'
import mt09 from '../../../assets/images/movie-thumb/09.jpg'
import mt10 from '../../../assets/images/movie-thumb/10.jpg'

const MovieList = () => { 
    const dispatch = useDispatch();
    useEffect(()=>{
        getMovies().then(data => {
            dispatch(setMovies({movies: data}))
          })

    },[])

    const movies = useSelector((state) => state.movies?.data)
    return (
        <> 
            <Container fluid>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <Card.Header.Title>
                                    <h4 className="card-title">Movie Lists</h4>
                                </Card.Header.Title>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Link to="/add-movie" className="btn btn-primary">Add movie</Link>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-view">
                                    <table className="data-tables table movie_table " style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                                <th>Movie</th>
                                                <th>Quality</th>
                                                <th>Category</th>
                                                <th>Release Year</th>
                                                <th>Language</th>
                                                <th style={{width: "20%"}}>Description</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(movies||[]).map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                        <div className="media align-items-center">
                                                            <div className="iq-movie">
                                                                <Link to="#">
                                                                    <img src={mt06} className="img-border-radius avatar-40 img-fluid" alt=""/>
                                                                </Link>
                                                            </div>
                                                            <div className="media-body text-white text-left ml-3">
                                                                <p className="mb-0">{item?.title}</p>
                                                                <small>{item?.duration}</small>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>{item?.quality}</td>
                                                        <td>{item?.category}</td>
                                                        <td>{item?.releaseYear}</td>
                                                        <td>{item?.language}</td>
                                                        <td>
                                                        <p className="m-0">{item?.description}
                                                        </p>
                                                        </td>
                                                        <td>
                                                            <div className="flex align-items-center list-user-action">
                                                                <OverlayTrigger placement="top"overlay={<Tooltip>View</Tooltip>}>
                                                                    <Link className="iq-bg-warning" to="#"><i className="lar la-eye"></i></Link>                                                
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top"overlay={<Tooltip>Edit</Tooltip>}>
                                                                    <Link className="iq-bg-success" to="#"><i className="ri-pencil-line"></i></Link>
                                                                </OverlayTrigger>
                                                                <OverlayTrigger placement="top"overlay={<Tooltip>Delete</Tooltip>}>
                                                                    <Link className="iq-bg-primary" to="#"><i className="ri-delete-bin-line"></i></Link>
                                                                </OverlayTrigger>
                                                            </div>
                                                        </td>
                                                </tr> 
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
       </>
    )
}
export default MovieList;
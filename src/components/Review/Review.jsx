import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewById } from 'services/fetchMoviesApi';
import Box from 'components/Box';

export const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetchReviewById(movieId).then(setReview);
    }, [movieId]);

     if (!review) {
       return null;
     }

    return (
        <>
            {review.length > 0 ?
                (
                    <Box as="ul" display="flex" flexDirection="column" gridGap={4}>
                        {review.map(({ id, author, content }) => (
                            <li key={id}>
                                <Box display="flex" flexDirection="column" gridGap={3}>
                                    <h3>{author}</h3>
                                    <p>{content}</p>
                                </Box>
                            </li>
                        ))}
                    </Box>
                ):(<p>We don't have any reviews for this movie.</p>)}
      </>
    );
};

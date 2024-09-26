import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import style from './photoModal.module.css';
import PhotoModalCloseButton from "../../_component/PhotoModalCloseButton";

export default function Default() {
  // const photo = {
  //   imageId: 1,
  //   link: faker.image.urlLoremFlickr(),
  //   Post: {
  //     content: faker.lorem.text()
  //   }
  // }
  const target = {
    postId: 1,
    content: "콘텐츠",
    User: {
      id: "kai3030",
      nickname: "kai",
      image: "/yRsRRjGO.jpg",
    },
    createdAt: new Date(),
    Images: [
      { imageId: 1, link: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MTZfMjM3%2FMDAxNjIzODQyOTg3MzY3.7v4ygFFbWeQBe4IXdeeK1RX3WcNTxGr92NE--fmcbLcg.Zx5OhlCBo1uGIuQnhXwtSFCYYHMadsyq-2_eYyRhngEg.JPEG.mssixx%2FIMG_7826.JPG&type=a340'},
    ],
  };
  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={target.Images[0]?.link} alt="" />
        <div className={style.image} style={{backgroundImage: `url(${target.Images[0]?.link})`}} />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <ActionButtons white />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        {/* <Post noImage /> */}
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
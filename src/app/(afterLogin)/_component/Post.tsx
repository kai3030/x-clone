import style from "./post.module.css";
import Link from "next/link";

// dayjs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "../home/_component/ActionButtons";
import PostImages from "./PostImages";

// dayjs plugin
dayjs.locale("ko"); // 한국어 플러그인
dayjs.extend(relativeTime); // 상대 시간 계산 플러그인

export default function Post() {
  //   console.log(dayjs().format('YYYY년 MM월 DD일'));
  //   console.log(dayjs().fromNow());

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
      // { imageId: 2, link: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDZfMjk2%2FMDAxNjY3NzQzMjE1OTQy.OR78TiuR-YiQkcjM7i14_GvR4M9CsX2OwEtHi1BYc-sg.QLUg2PZu6lIFP4lpfrj8xzRo1R5Tc8DL3zdUNDv7tMog.JPEG.310861%2FIMG_4493.JPG&type=a340'},
      // { imageId: 3, link: kai_profile},
      // { imageId: 4, link: kai_profile},
    ],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}></div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </article>
  );
}

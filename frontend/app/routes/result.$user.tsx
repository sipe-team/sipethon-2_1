import type { MetaFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { ImageContainer } from "~/components/ImageContainer";
import { ResultMainBlock } from "~/feature/ResultMainBlock";
import { ResultSubBlock } from "~/feature/ResultSubBlock";

const tempUrl =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82e91788-9673-4a3b-8f66-64e1e71b2367/dg3iqlf-45222abf-dab8-43b0-96dd-7a3fc13b35df.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyZTkxNzg4LTk2NzMtNGEzYi04ZjY2LTY0ZTFlNzFiMjM2N1wvZGczaXFsZi00NTIyMmFiZi1kYWI4LTQzYjAtOTZkZC03YTNmYzEzYjM1ZGYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0HjKfcxZj7b97Gjm-x-l4owq4LGCTFp97woMhw4pbhE";

const tempImage =
  "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw61d9f227/Y0996347/Y0996347_C099600764_E01_GHC.jpg?sw=800";
const tempNotes =
  "암브레트, 네스베리, 매그놀리아, 샌달우드, 바이올렛, 시더우드, 프랑스 멋크, 앰버".split(
    ", "
  );

export const meta: MetaFunction = () => {
  return [
    { title: "Result | Siperfume" },
    { name: "description", content: "perfume recommendation by AI" },
  ];
};

export default function ResultPage() {
  const { user } = useParams();
  return (
    <>
      <Header />
      <ImageContainer src={tempUrl} alt="result" />
      <ResultMainBlock />
      <ResultSubBlock
        brand="브랜드"
        name="향수이름"
        description="설명"
        notes={tempNotes}
        imageUrl={tempImage}
      />
      <Button
        style={{ margin: "30px auto 42px" }}
        onClick={() => window.location.assign("/")}
      >
        향고와 새로 대화하기
      </Button>
    </>
  );
}

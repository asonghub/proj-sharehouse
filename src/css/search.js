import styled from "styled-components";

export const SearchContainter = styled.div`
  width: 350px;
  border-radius: 5px;
  height: 40px;
  margin: 10px;
  /* background-color: beige; */
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
export const btnstyle = {
  display: "block",
  height: "38px",
  // padding: "0.375rem 0.7rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "var(--bs-body-color)",
  appearance: "none",
  backgroundColor: "var(--bs-body-bg)",
  backgroundImage:
    "var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.75rem center",
  backgroundSize: "16px 12px",
  border: "var(--bs-border-width) solid var(--bs-border-color)",
  borderRadius: "var(--bs-border-radius)",
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",
};

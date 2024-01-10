export const postFilter = (data: any, value: string) => {
  return data.filter((post: any) =>
    Object.keys(post).some((el: any) =>
      post[el]
        .toString()
        .toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase())
    )
  );
};

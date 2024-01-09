export const useFilter = (data: any, value: string) => {
  return data.filter((user: any) =>
    Object.keys(user).some((el: any) =>
      user[el]
        .toString()
        .toLocaleLowerCase()
        .includes(value.trim().toLocaleLowerCase())
    )
  );
};

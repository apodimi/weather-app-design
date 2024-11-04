interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="pb-[30px] px-10 pt-[30px] bg-blue-sky bg-cover">
      {children}
    </div>
  );
};

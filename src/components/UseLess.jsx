export function StyledButtonInternal() {
    return (
      <>
        <style>{`
          .internal-style {
            background-color: teal;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
          }
        `}</style>
        <button className="internal-style">Internal Styled Button</button>
      </>
    );
  }
  
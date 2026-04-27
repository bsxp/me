export const POST_META = {
  slug: "txdot-bbq",
  title: "Yes, the Texas DOT tracks BBQ",
  description:
    "On accidentally finding a Texas Monthly Top 50 BBQ overlay while poking around the TxDOT data portal.",
  tags: ["Urbanism", "Austin", "Thoughts"],
  date: new Date(2026, 3, 20),
};

const IMG = "/blog/txdot-bbq";

export default function TxDOTBBQ() {
  return (
    <article>
      <p>
        I was recently putting in a data request to the TxDOT to retrieve
        some pedestrian foot traffic data for Travis County, and came
        across this{" "}
        <a
          href="https://www.dot.state.tx.us/apps/statewide_mapping/StatewidePlanningMap.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          wonderful data portal
        </a>{" "}
        published by TxDOT.
      </p>

      <p>
        Inside the portal there are plenty of overlays you can add:
        bridges, signage, toll roads, etc. Pretty neat stuff; the kinds
        of things the layman would commonly associate with a Department
        of Transportation.
      </p>

      <p>
        ...but then I saw the "additional overlays" tab in the bottom
        left corner and the curiosity got the best of me. What could
        possibly be in here?
      </p>

      <p>Turns out, lots of stuff!</p>

      <ul>
        <li>Air quality</li>
        <li>FEMA floodplains</li>
        <li>Population estimates</li>
        <li>Future highways</li>
      </ul>

      <p>
        ...and lots more. If you're an urban data nerd, go check it out.
        This portal is a wealth of knowledge.
      </p>

      <p>
        In my poking around I found one dataset that really stood out
        from the rest, because how could it possibly be pertinent to
        the TxDOT's operations? But lo and behold, there she is in all
        her magnificent glory:
      </p>

      <p>
        <strong>Texas Monthly Top 50 BBQ Joints.</strong>
      </p>

      <p>
        Only in Texas is BBQ important enough to have an overlay in
        the state's DOT data portal.
      </p>

      <img
        src={`${IMG}/bbq-overlay.png`}
        alt="The TxDOT data portal showing the Texas Monthly Top 50 BBQ Joints overlay"
        className="w-full rounded-sm my-6"
      />

      <p>
        So far I'm 7/50 on the list. Here's my rank order of the ones
        that have appeared:
      </p>

      <div style={{ margin: "1.5rem 0", borderTop: "1px solid #eee" }}>
        {[
          {
            rank: 1,
            medal: "🥇",
            name: "Franklin's",
            note: "I wouldn't do it often because of the 4 hour line, but my goodness was the brisket to die for.",
          },
          {
            rank: 2,
            medal: "🥈",
            name: "La Barbecue",
            note: "Hands down best mac n' cheese in Austin, AND their smoked-meat sandwich game is unmatched.",
          },
          {
            rank: 3,
            medal: "🥉",
            name: "KG BBQ",
            note: "If you're looking for an Egyptian twist, you can't miss. The rub on their smoked chicken will have your head spinning.",
          },
          {
            rank: 4,
            name: "Interstellar",
            note: "Long lines, kind of far away, and I'm not the biggest fan of breaded mac, but the meat is why it's on the list, and boy oh boy do they deliver.",
          },
          {
            rank: 5,
            name: "Mum Foods",
            note: "A Mum Foods brisket sandwich for lunch will put you out of commission for the rest of the day, but how could you ever pass it up?",
          },
          {
            rank: 6,
            name: "Briscuits",
            note: "Awesome food truck located next to Radio Coffee, and their brisket biscuit (get it?) delivers.",
          },
          {
            rank: 7,
            name: "Stiles Switch",
            note: "10/10 pork ribs.",
          },
        ].map(({ rank, medal, name, note }) => (
          <div
            key={rank}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              padding: "0.85rem 0.5rem",
              borderBottom: "1px solid #eee",
            }}
          >
            <span
              style={{
                width: "2.25rem",
                flexShrink: 0,
                textAlign: "center",
                fontSize: medal ? "1.4rem" : "1rem",
                fontFamily: "'Google Sans Code', monospace",
                color: medal ? undefined : "#999",
                paddingTop: "0.1rem",
              }}
            >
              {medal ?? rank}
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: medal ? 600 : 500,
                  marginBottom: "0.2rem",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: 1.5,
                }}
              >
                {note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p>
        If you're ever in town, message me and let's grab a bite. It's
        tough to say no to good smoked Texas meat.
      </p>

      <p>Yeehaw.</p>
    </article>
  );
}

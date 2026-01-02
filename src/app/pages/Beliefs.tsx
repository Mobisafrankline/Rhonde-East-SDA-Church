import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { BookOpen } from 'lucide-react';

export function Beliefs() {
  const beliefs = [
    {
      title: "The Holy Scriptures",
      content: "The Holy Scriptures, Old and New Testaments, are the written Word of God, given by divine inspiration. They are the infallible revelation of His will, the standard of character, the test of experience, the authoritative revealer of doctrines, and the trustworthy record of God's acts in history."
    },
    {
      title: "The Trinity",
      content: "There is one God: Father, Son, and Holy Spirit, a unity of three co-eternal Persons. God is immortal, all-powerful, all-knowing, above all, and ever present. He is infinite and beyond human comprehension, yet known through His self-revelation."
    },
    {
      title: "The Sabbath",
      content: "The beneficent Creator, after the six days of Creation, rested on the seventh day and instituted the Sabbath for all people as a memorial of Creation. The fourth commandment of God's unchangeable law requires the observance of this seventh-day Sabbath as the day of rest, worship, and ministry."
    },
    {
      title: "The Second Coming of Christ",
      content: "The second coming of Christ is the blessed hope of the church, the grand climax of the gospel. The Saviour's coming will be literal, personal, visible, and worldwide. When He returns, the righteous dead will be resurrected, and together with the righteous living will be glorified and taken to heaven."
    },
    {
      title: "Baptism",
      content: "By baptism we confess our faith in the death and resurrection of Jesus Christ, and testify of our death to sin and of our purpose to walk in newness of life. Baptism is by immersion in water and is closely associated with an affirmation of faith in Jesus and evidence of repentance of sin."
    },
    {
      title: "The Gift of Prophecy",
      content: "One of the gifts of the Holy Spirit is prophecy. This gift is an identifying mark of the remnant church and we believe it was manifested in the ministry of Ellen G. White. Her writings speak with prophetic authority and provide comfort, guidance, instruction, and correction to the church."
    },
    {
      title: "The Law of God",
      content: "The great principles of God's law are embodied in the Ten Commandments and exemplified in the life of Christ. They express God's love, will, and purposes concerning human conduct and relationships and are binding upon all people in every age."
    },
    {
      title: "Stewardship",
      content: "We are God's stewards, entrusted by Him with time and opportunities, abilities and possessions, and the blessings of the earth and its resources. We are responsible to Him for their proper use. We acknowledge God's ownership by faithful service to Him and our fellow human beings, and by returning tithes and giving offerings for the proclamation of His gospel and the support and growth of His church."
    },
    {
      title: "Christian Behavior",
      content: "We are called to be a godly people who think, feel, and act in harmony with biblical principles in all aspects of personal and social life. For the Spirit to recreate in us the character of our Lord we involve ourselves only in those things that will produce Christlike purity, health, and joy in our lives."
    },
    {
      title: "Death and Resurrection",
      content: "The wages of sin is death. But God, who alone is immortal, will grant eternal life to His redeemed. Until that day death is an unconscious state for all people. When Christ, who is our life, appears, the resurrected righteous and the living righteous will be glorified and caught up to meet their Lord."
    },
    {
      title: "The Remnant and Its Mission",
      content: "The universal church is composed of all who truly believe in Christ, but in the last days, a remnant has been called out to keep the commandments of God and have the faith of Jesus. This remnant announces the arrival of the judgment hour, proclaims salvation through Christ, and heralds the approach of His second advent."
    },
    {
      title: "The Church",
      content: "The church is the community of believers who confess Jesus Christ as Lord and Saviour. In continuity with the people of God in Old Testament times, we are called out from the world; and we join together for worship, for fellowship, for instruction in the Word, for the celebration of the Lord's Supper, for service to humanity, and for the worldwide proclamation of the gospel."
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-heading font-bold mb-4">Our Beliefs</h1>
          <p className="text-xl text-muted-foreground">
            Seventh-day Adventists accept the Bible as their only creed and hold certain fundamental beliefs to be the teaching of the Holy Scriptures.
          </p>
        </div>

        <div className="mb-12">
          <p className="text-lg text-muted-foreground mb-6">
            These beliefs, as set forth here, constitute the church's understanding and expression of the teaching of Scripture. Revision of these statements may be expected at a General Conference session when the church is led by the Holy Spirit to a fuller understanding of Bible truth or finds better language in which to express the teachings of God's Holy Word.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {beliefs.map((belief, index) => (
            <AccordionItem key={index} value={`belief-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-heading">
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  {belief.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4">
                {belief.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            For a complete list of all 28 Fundamental Beliefs, visit the official Seventh-day Adventist Church website.
          </p>
        </div>
      </div>
    </div>
  );
}

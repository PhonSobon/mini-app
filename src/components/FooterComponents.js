"use client";
import React from 'react'
import { Footer } from 'flowbite-react';
export default function FooterComponents() {
  return (
    <div>
        <Footer container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                <Footer.Brand
                    href="https://flowbite.com"
                    src="https://cdn.dribbble.com/users/60166/screenshots/15558186/media/fa6bd0b894439dd443fa89956d74719b.jpg?compress=1&resize=400x300&vertical=top"
                    alt="Flowbite Logo"
                    name="LifeBully"
                />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                    About
                    </Footer.Link>
                    <Footer.Link href="#">
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                    Licensing
                    </Footer.Link>
                    <Footer.Link href="#">
                    Contact
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                href="#"
                by="Flowbite™"
                year={2022}
                />
            </div>
       </Footer>
    </div>
  )
}

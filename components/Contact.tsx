'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Button from '@/components/ui/UIButton';
import { Form } from '@/components/ui/form';
import FormInput from './FormInput';
import { contact } from '@/constants';
import { socials } from '@/constants';
import { sendMail } from '@/lib/actions/mail.actions';
import { parseStringify, motionValues } from '@/lib/utils';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({ message: 'Email is invalid.' }),
  message: z.string().min(3, { message: "Message can't be empty." }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await sendMail(values)
      .then((response) => parseStringify(response))
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));

    form.reset();
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-[574px] lg:max-w-[516px] flex flex-col gap-10"
        {...motionValues}
      >
        <FormInput
          name="name"
          control={form.control}
          label="Name"
          placeholder="Marvellous Olabode"
        />
        <FormInput
          name="email"
          control={form.control}
          label="Email"
          placeholder="Marvellousolabode@gmail.com"
        />
        <FormInput
          name="message"
          control={form.control}
          label="Message"
          placeholder="Message here"
        />
        <Button
          type="submit"
          className="bg-transparent rounded-xl text-white border border-white py-2.5"
        >
          <span className="font-montserrat font-bold">Submit</span>
        </Button>
      </motion.form>
    </Form>
  );
};

const SocialIcon = ({ name, className }: SocialIconProps) => {
  return (
    <Fragment>
      {name === 'whatsapp' ? (
        <FaWhatsapp className={className} />
      ) : name === 'github' ? (
        <FaGithub className={className} />
      ) : name === 'x' ? (
        <FaXTwitter className={className} />
      ) : name === 'linkedin' ? (
        <FaLinkedin className={className} />
      ) : name === 'email' ? (
        <MdEmail className={className} />
      ) : name === 'instagram' ? (
        <FaInstagram className={className} />
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

const Contact = () => {
  const { title, description } = contact;

  return (
    <section id='contact' className='section section_px section-gap'>
      <main className='flex-center flex-col gap-8'>
        <motion.h2 className='section-h2' {...motionValues}>
          {title}
        </motion.h2>
        <motion.h3 className='section-h3' {...motionValues}>
          {description}
        </motion.h3>
        <div className='contact-wrapper'>
          <ContactForm />
          <motion.div className='social-wrapper' {...motionValues}>
            {socials.map(({ name, url }: Social, index: number) => {
              return (
                <Link key={index} href={url} className='cursor-pointer'>
                  <SocialIcon
                    name={name}
                    className='text-white size-5 sm:size-6'
                  />
                </Link>
              );
            })}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Contact;

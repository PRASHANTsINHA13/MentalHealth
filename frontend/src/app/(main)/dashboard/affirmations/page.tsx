import React from "react";
import Image from "next/image";

function Page() {
  return (
    <main className=" h-screen max-h-screen overflow-y-auto py-8 px-5 ">
      <div className="space-y-2 ">
        <Accordian accoridanName="affirmation" title="Balasana(child pose)">
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/balasana.jpg"
              alt="balasana image"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Balasana brings calmness to your brain and helps with anxiety
                and stress relief. helps calm your brain and relieves stress and
                anxiety. It gently stretches your lower back and hips, enabling
                your body to relax. Peace and calm prevail over your entire
                being, helping you deal with your depression better
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>
                  Sit on your heels, knees spread mat distance apart and bring
                  your head towards the floor
                </li>
                <li>
                  Your arms can be either stretched out to the front, by your
                  side or hands underneath your forehead
                </li>
                <li>Breathe into your lower back</li>
                <li>
                  Stay for anywhere between 30 seconds and several minutes in
                  this resting pose
                </li>
                <li>
                  To come out, exhale and roll up vertebra by vertebra, or come
                  back to sitting with a straight spine.
                </li>
              </ul>
            </div>
          </section>
        </Accordian>

        <Accordian
          accoridanName="affirmation"
          title="Sethu Bandhasana (Bridge Pose)"
        >
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/bridge-pose.jpg"
              alt="balasana image"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Sethu Bandhasana strengthens the back muscles, buttocks, and
                hamstrings and relieves a tired back. It helps you relax and
                works wonders for people suffering from stress, anxiety, and
                depression.
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>To do the pose, lie down on the floor on your back.</li>
                <li>
                  Keep your arms on the floor on either side with the palms
                  facing down. Lift your legs by folding them at the knees.
                </li>
                <li>
                  Make sure the ankles and knees are in a straight line, and the
                  feet are a few inches apart. Then, gently lift your entire
                  back off the floor and stay there for a few seconds.
                </li>
                <li>
                  While doing this, your thighs should be parallel to each
                  other, and your chest should touch your chin. Make sure you do
                  not bend your chin.
                </li>
              </ul>
            </div>
          </section>
        </Accordian>

        <Accordian
          accoridanName="affirmation"
          title="Urdhva Mukha Svanasana (Upward-Facing Dog Pose):"
        >
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/savasana.jpg"
              alt="savasana image"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Urdhva Mukha Svanasana can easily cure mild fatigue and
                depression. It has an overall rejuvenating effect on your body,
                and all the stress trapped in your back will vanish.
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>
                  To do the asana, lie on the floor with your face down and legs
                  following the same with the toes facing downward and a few
                  inches apart.
                </li>
                <li>
                  Place your palms near the chest on either side, facing down.
                  Keep your palms close to your ribs.
                </li>
                <li>
                  Lift your torso and straighten your arms and legs a few inches
                  off the floor. Press the top part of your feet firmly into the
                  ground.
                </li>
                <li>
                  Keep your head straight or facing upwards and your shoulders
                  away from your ears and let your chest rise.
                </li>
              </ul>
            </div>
          </section>
        </Accordian>

        <Accordian
          accoridanName="affirmation"
          title="Adho Mukha Svanasana (Downward-Facing Dog Pose):"
        >
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/adho-savasana.jpg"
              alt="adho-savasana"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Adho Mukha Svanasana enables fresh blood to flow into your body.
                It stretches the neck and cervical spine, releasing the stress
                in them, thereby reducing anxiety and calming your being.
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>
                  To do the pose, make a posture of a table with your body. Use
                  your legs and hands to make the legs of the table and your
                  back as the table top.
                </li>
                <li>
                  Now, straighten your elbows and knees, pushing your hip upward
                  and forming an inverted V-shape with your body.
                </li>
                <li>
                  The hands should be shoulder-width apart, legs hips-width
                  apart, and the toes pointing straight.
                </li>
                <li>
                  Firmly press your hands to the ground and straighten your
                  neck. Your ear should touch your inner arms.
                </li>
                <li>Keep your eye gaze at your navel.</li>
              </ul>
            </div>
          </section>
        </Accordian>

        <Accordian accoridanName="affirmation" title="Halasana (Plow Pose)">
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/halasana.jpg"
              alt="Halasana (Plow Pose)"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Halasana reduces the strain on your back and enhances your
                posture. It calms your brain, gives it a good stretch, and
                reduces stress. It keeps headaches and insomnia at bay. being.
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>
                  To do the pose, lie flat on your back, with your arms kept
                  alongside your body.
                </li>
                <li>
                  Lift your legs off the ground at an angle of 90 degrees to the
                  ground. Then, place your hands on your hips and using them as
                  support, lift your hips towards your chest.
                </li>
                <li>
                  Slowly bring down your legs and take them over your head,
                  touching the ground beyond your head and placing your toes
                  firmly on the ground.
                </li>
                <li>
                  Make sure your thighs are straight to avoid them touching your
                  head. Remove your hands from the hips, straighten your arms
                  forward, and place them on the ground with the palms facing
                  downward.
                </li>
              </ul>
            </div>
          </section>
        </Accordian>

        <Accordian accoridanName="affirmation" title=" Savasana (Corpse Pose)">
          <section className="flex space-x-6">
            <Image
              width={700}
              height={400}
              src="/static/corpse-pose.jpg"
              alt="Halasana (Plow Pose)"
              className="rounded-sm overflow-hidden"
            />
            <div className="space-y-2">
              <p>
                Savasana rejuvenates you and helps your body relax. It reduces
                blood pressure and lets the effects of the previous poses to
                sink in better
              </p>
              <h2 className="text-lg underline font-semibold">Steps</h2>
              <ul className="list-disc list-inside">
                <li>
                  To do the Savasana, lie on the floor on your back. Keep your
                  feet a few inches apart and let them fall sideways.
                </li>
                <li>
                  Let your arms lie alongside your body with your palms facing
                  upwards.
                </li>
                <li>
                  Now, gently close your eyes and let your whole body relax,
                  slowly and gently.
                </li>
                <li>Take deep breaths, and stay in the moment.</li>
              </ul>
            </div>
          </section>
        </Accordian>
      </div>
    </main>
  );
}

export default Page;

function Accordian(
  props: React.PropsWithChildren<{ title: string; accoridanName: string }>
) {
  const { title, accoridanName, children } = props;
  return (
    <div className="collapse collapse-plus bg-base-200 border border-primary">
      <input type="radio" className="peer" name={accoridanName} />
      <div className="collapse-title text-xl font-medium mb-4 ">{title}</div>

      <div className="collapse-content max-h-60  overflow-y-auto scrollbar-thin">
        {children}
      </div>
    </div>
  );
}
